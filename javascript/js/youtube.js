// document.getElementById("button").onclick = function () {
//   document.getElementById("confirm").innerHTML =
//     "Order placed. Chech email for confirmation";
//   document.getElementById("button").style.display = "none";
// };
//var username = prompt();
// username = 5;
// username = "Hello";
// console.log(username);
// var age = 50;
// console.log(age);
// console.log(age);
// console.log(age);
// var age = 50;
// var newAge = age;
// var message = "newAge = " + newAge; //"newAge = 50"
// console.log(message);
//declaration
//initialization
// (function () {
//   //IIFE - imidately invoked function expression
//   var age = 5;
// })();
// {
//   //block
//   let y = 10;
//   const x = 20;
//   {
//     let y = 6;
//     console.log(y);
//   }
//   console.log(y);
//   var z = 100;
// }

// let x = 5; //number
// let b = "10";
// x = x + b;
// console.log(x);
// let myName = "caleb";
// let tacos = null;
// let person = {
//   name: "Reza",
//   age: 93,
//   favFood: "Pizza... Obviously -_-",
//   fun: function () {
//     console.log("Yay!");
//   },
// };
// person.fun();
// let now = new Date();
// let grades = [30, 30, 12, 23];
// let x = 10;
// x = 5;
// {
// let myName = "Caleb";
//   myName.toUpperCase();
// let yourName = new String("clarie");
//   let age = new Number();
//   age.valueOf();
//   console.log(typeof myName);
//   console.log(typeof yourName);
//   myName = myName.toUpperCase();
//   console.log(myName);
// }
//primitives
//objects
// {
//   let babies = 9007199254740991;
//   console.log(1 / 0);
// }
// {
// var slicesOfPizza = 10;
// console.log(slicesOfPizza % 4.25);
// var precedence1 = 5 + 3 * 12 - 20 / 10;
// var precedence2 = 5 + 3 * 12 - 20 / 10;
// var precedence3 = ((5 + 3) * (12 - 20)) / 10;
// console.log(precedence1, precedence2, precedence3);
// }
// {
//   let slicesOfPizza = 10;
//   let newPizza = ++slicesOfPizza;
//   console.log("slicesOfPizza:", slicesOfPizza);
//   console.log("newPizza:", newPizza);
// }
// {
//   let slicesOfPizza = 10;
//   slicesOfPizza += 10;
//   console.log(slicesOfPizza);
// }
// {
//   let x = 5;
//   let y = "10";
//   let yInt = Number.parseFloat("10.99999999");
//   console.log(x + yInt);
// }
// {
//   var input = prompt("Put in a number yo");
//   console.log("Decimal  :", input);
//   console.log("Binary   :", Number.parseInt(input, 2));
//   console.log("Octal    :", Number.parseInt(input, 8));
//   console.log("Hex      :", Number.parseInt(input, 16));
// }
// {
//   var input = Number(prompt("Put in a DECIMAL number yo"));
//   console.log(input, "in decimal to decimal:", input);
//   console.log(input, "in decimal to binary :", input.toString(2));
//   console.log(input, "in decimal to octal  :", input.toString(8));
//   console.log(input, "in decimal to hex    :", input.toString(16));
// }
// {
// let x = new Number();
// Number.
// let x = 5;
// console.log(x.toExponential(5));
// let x = 5959595959;
// console.log(x.toExponential(3));
// let x = 5.59595959;
// console.log("$" + x.toFixed(2));
// let x = 559595959;
// console.log("$" + x.toLocaleString());
// let x = 559595959;
// console.log("$" + x.toPrecision(2));
// let x = new Number(559595959);
// console.log(typeof x);
// }
// {
//   var abs = Math.abs(-36); //36
//   var goUp = Math.ceil(0.00000001); //1
//   var goDown = Math.floor(0.99999); //0
//   var powerUp = Math.pow(3, 2); //9
//   var roundUp = Math.round(4.9); //5
//   var roundDown = Math.round(5.1); //5
//   var isPositive = Math.sign(-Infinity); //-1 (false)
//   var getInt = Math.trunc(4.99999); //4
// }
{
  // let myName = "Reza";
  // let yourName = new String("Soheila");
  // console.log(myName[2]);
  // console.log(myName[20000]);
  // let myName = "Re\nza";
  // console.log(myName);
  // let myName = "Re\\za";
  // console.log(myName);
  // let myName = "Reza";
  // console.log("My Name is " + myName + "!");
  // console.log(`My Name is ${myName}!`);
  let test =
    "This is a very very very very very very very long and very very very very very very ugly thing";
  console.log(test.length);
}
