interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "John",
  age: 23,
  greet(phrase) {
    console.log(phrase);
  },
};
