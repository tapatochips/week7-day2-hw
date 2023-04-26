
//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


function favoriteFood(person) {
    Object.keys(person).forEach(key => {
      if (Array.isArray(person[key])) {
        console.log(`${key}:`);
        person[key].forEach(item => {
          console.log(`- ${item}`);
        });
      } else {
        console.log(`${key}: ${person[key]}`);
      }
    });
  }
  
  // Example usage:
  favoriteFood(person3);
  

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    printInfo = () => {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  
    addAge = (years) => {
      this.age += years;
    }
  }
  
  const person1 = new Person("John Wick", 43);
  const person2 = new Person("Obi-Wan Kenobi", 25);
  
  person1.printInfo();
  person2.printInfo();
  
  person1.addAge(3);
  
  person1.printInfo();
  
  


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function checkString(str) {
    return new Promise((resolve, reject) => {
      if (str.length > 10) {
        console.log("Biiiiiig word");
        resolve();
      } else {
        console.log("Smoll Number");
        reject();
      }
    });
  }

  checkString("hello world")
  .then(() => {
    console.log("Promise resolved");
  })
  .catch(() => {
    console.log("Promise rejected");
  });



//codewars problem #1: https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript
const hero = (bullets, dragons) => {
    return bullets >= dragons * 2;
  };


//codewars problem #2: https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
function solution(number) {
    if (number < 0) {
      return 0;
    }
  
    let sum = 0;
    for (let i = 3; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
  
    return sum;
  }
  

