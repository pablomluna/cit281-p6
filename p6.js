/*
    CIT 281 Project 6
    Name: Pablo Manriquez

    could not figure out tenary operator for the Shape.perimeter method 
*/

class Shape {
  constructor(sides = []) {
    this.sides = sides;
  }

  perimeter = () => this.sides.reduce((a, b) => a + b);
}

//console.log(new Shape([5, 10]).perimeter());
//console.log(new Shape([1, 2, 3, 4, 5]).perimeter());

class Rectangle extends Shape {
  constructor(length = 0, width = 0) {
    super([length, width, length, width]);
    this.length = length;
    this.width = width;
  }
  area = () => this.length * this.width;
}

//console.log(new Rectangle(4, 4).perimeter());
//console.log(new Rectangle(4, 4).area());
//console.log(new Rectangle(5, 5).perimeter());
//console.log(new Rectangle(5, 5).area());
//console.log(new Rectangle().perimeter());
//console.log(new Rectangle().area());

class Triangle extends Shape {
  constructor(sideA = 0, sideB = 0, sideC = 0) {
    super([sideA, sideB, sideC]);
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  area = () =>
    Math.sqrt(
      (this.sides.reduce((a, b) => a + b) / 2) *
        (this.sides.reduce((a, b) => a + b) / 2 - this.sideA) *
        (this.sides.reduce((a, b) => a + b) / 2 - this.sideB) *
        (this.sides.reduce((a, b) => a + b) / 2 - this.sideC)
    );
}

//console.log(new Triangle(3, 4, 5).perimeter());
//console.log(new Triangle(3, 4, 5).area());
//console.log(new Triangle().perimeter());
//console.log(new Triangle().area());

const data = [[3, 4], [5, 5], [3, 4, 5], [10], []];

data.map((item) => {
  switch (item.length) {
    case 2:
      shape = new Rectangle(...item);
      if (item[0] === item[1]) {
        console.log(
          `Square with sides ${item} has perimeter of ${shape.perimeter(
            shape
          )} and area of ${shape.area(shape)}`
        );
      } else
        console.log(
          `Rectangle with sides ${item} has perimeter of ${shape.perimeter(
            shape
          )} and area of ${shape.area(shape)}`
        );
      break;
    case 3:
      shape = new Triangle(...item);
      console.log(
        `Triangle with sides ${item} has a perimeter of ${shape.perimeter(
          shape
        )} and area of ${shape.area(shape)}`
      );
      break;
    default:
      if (item.length === 1) {
        console.log(`Shape with ${item.length} side unsupported`);
      } else console.log(`Shape with ${item.length} sides unsupported`);
      break;
  }
});
