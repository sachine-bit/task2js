// //Part 1: Variables and Data Types (5 Questions)
// //Declare variables using var, let, and const. Reassign and redeclare them wherever allowed, then print the results.
// var a =10;
// a=2;
// var a =12;
// let  b =30;
// b=31;
// //let b =32; can't redeclare
// const c=40;
// //c=41; cant redeclare and reassign
// //const c=42;
// console.log(a);
// console.log(b);
// console.log(c);
// o/p:12
//      31
//      40

//      //Create variables for your name, age, and programming knowledge. Print each variable and its data type using typeof.

// let name ="sachin";
// let age=22;
// let programminglanguage = " java and sql";
// console.log(name);
// console.log(typeof name);
// console.log(age);
// console.log(typeof age);
// console.log( programminglanguage);
// console.log(typeof  programminglanguage);
// o/p:sachin
//       string
//       22
//       number
//       java and sql
//       string

// //Create an array of 5 fruits. Print the complete array, the first element, and the last element.
// let fruits=["apple","orange","strawberry","pineapple","muskmelon"];
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[fruits.length-1]);

// o/p:['apple', 'orange', 'strawberry', 'pineapple', 'muskmelon']
// apple
// muskmelon

// //Create an object containing your name, role, and CGPA. Print each property separately.
// let student ={
//     name:"sachin",role:"full stack developer",cgpa:8.1
// }
// console.log(student.age);
// console.log(student.role);
// console.log(student.cgpa);
// op:sachin
//      full stack developer
//      8.1

// //Take the user's name and age using prompt(). Display the name using alert() and print the age in the console.
// let username= prompt("what is your name");
// let userage= prompt("what is your age");
// alert(username);
// console.log(userage);

// //Part 2: Operators (7 Questions)
// //Declare two numbers and perform addition, subtraction, multiplication, division, modulus, and exponentiation.
// let x =60;
// let y=20;
// //addition
// console.log(x+y);
// //o/p:80
// //subtraction
// console.log(x-y);
// //op:40
// //multiplication
// console.log(x*y);
// //op:1200
// //division
// console.log(x/y);
// //op:3
// //modulus
// console.log(x%y);
// //op:0
// //exponentiation
// console.log(x**y);   
// //op:3.656158440062976e+35

// //predict the output 
// let ab = 5;
// console.log(ab++);
// console.log(ab);
// console.log(++ab);
//  op:5
//       6
//       7*/

//       8. Predict the output:
// let a = 10;
//  let b = a--;
//  let c = --a;

//  console.log(a);
// console.log(b);
// console.log(c);
// o/p:8 10 8

//Use the +=, -=, *=, /=, and %= assignment operators on a variable and print the final value after each operation.
// sum=10;
// sum+=10;
// console.log(sum);
// o/p:20

// sub=20;
// sub-=10;
// console.log(sub);

// mul=1;
// mul*=1;
// console.log(mul);
//o/p:1

// div=2;
// div/=2;
// console.log(div);
// op:1

// mod=3;
// mod%=2;
// console.log(mod);
// o/p:1

//Predict the results of these comparisons:
// console.log(5 == "5");//true
// console.log(5 === "5");//false
// console.log(10 != "10");//false
// console.log(10 !== "10");//true

//Use &&, ||, and ! to check different combinations of conditions.
// console.log(5>3 && 10>5);//true
// console.log(5>3 || 10>5);//true
// console.log(5!=5);//false

//Use the ternary operator to check whether a user's age is 18 or above and print an appropriate message.
//  let age = 17;
//  console.log(age>=18 ? "eligible to apply liscence":"not eligible to apply liscense");
//op:not eligible

// Part 3: Type Casting and Conditions (6 Questions)
// 13. Predict the data type of each expression:
// console.log(typeof ("hello" + 10));//string
// console.log(typeof (10 + true));//number
// console.log(typeof (10 + null));//number
// console.log(typeof ("hello" + undefined));//string

//Use Number() to convert a value received through prompt() into a number. Add 10 and print the result.
// let value= prompt("enter a number");//2
// let num=Number(value);
// console.log(num+2);
// o/p:4

//Use Boolean() to check the Boolean values of an empty string, a non-empty string, 0, and true.
// console.log(Boolean(""));false
// console.log(Boolean(" hi "));true
// console.log(Boolean(1));true
// console.log(Boolean(0));false

//Write an if-else statement to check whether a number is positive or not.
//  let num =12;
//  if(num>0){
//      console.log(" number is positive");
//  }
//  else{
//      console.log(" number is negative");
//  }
//  op:number is positive

//Use else-if to display a message based on the time entered by the user: early morning, morning, afternoon, evening, or night.
// let time = 13.00;
// if(time>=5.00 && time<8.00){
//     console.log("early morning");
// }
// else if(time>=8.00 && time<12.00){
//     console.log("morning");
// }
// else if(time>=12.00 && time<17.00){
//     console.log("afternoon");
// }
// else if(time>=17.00 && time<21.00){
//     console.log("evening");
// }
// else{
//     console.log("night");
// }
// op:afternoon

//Create a nested if statement to check eligibility based on age, height, and weight, following the conditions in your code.
// let age = 22;
// let height = 5.9;
// let weight = 53;
// if(age >= 18){
//      if(height >= 5.5){
//          if(weight >= 50){
//              console.log("Eligible for the program.");
//          }
//          else{
//              console.log("Not eligible: weight requirement not met.");
//          }
//      }
//      else{
//          console.log("Not eligible: height requirement not met.");
//      }
// }
// else{
//     console.log("Not eligible: age requirement not met.");
// }
// op:eligible for the program

//Part 4: Switch and Loops (8 Questions)
//Use switch to display a message based on a traffic light color: red, yellow, or green. Display an error for an invalid color.
//  let color = "red";
//  switch(color){
//      case "red":
//          console.log("Stop");
//          break;
//      case "yellow":
//          console.log("Get ready");
//          break;
//      case "green":
//          console.log("Go");
//          break;
//      default:
//          console.log("Invalid color");
//}
//  op:stop

//Use a for loop to print numbers from 1 to 20.
//  for(let i=1; i<=20; i++){
//      console.log(i);
//  }
//  o/p:1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20

//Use a for loop to print all even numbers from 2 to 20.
  //for(let i=2; i<=20; i+=2){
//     console.log(i);
//  }
//  o/p:2 4 6 8 10 12 14 16 18 20

//Use a while loop to print numbers from 10 down to 1.
//  let i = 10;
//  while(i>=1){
//      console.log(i);
//  }
//  o/p:10 9 8 7 6 5 4 3 2 1

//Use a do-while loop to print numbers from 1 to 10.
//  let i = 1;
//  do{
//      console.log(i);
//  }
// while(i<=10);
//  o/p:1 2 3 4 5 6 7 8 9 10

//Use a for-of loop to print each character in the string "JavaScript".
//  let str = "JavaScript";
//  for(let char of str){
//      console.log(char);
//  }
//  o/p:J a v a S c r i p t

//Use a for-of loop to print every element in an array of 5 student names.
//  let studentNames = ["A", "B", "C", "D", "E"];
//  for(let name of studentNames){
//      console.log(name);
//  }
//  o/p:A B C D E

//Use a for-in loop to print all keys and values of this object:
// let student = {
//     name: "Priya",
//     role: "Frontend Developer",
//     cgpa: 9
// };
// for(let key in student){
//     console.log(key + ": " + student[key]);
// }
// //  o/p:name: Priya
// //       role: Frontend Developer
// //       cgpa: 9

//Part 5: Mixed Practice (4 Questions)
//Take two numbers using prompt() and display their sum, difference, product, and remainder.
// let num1 = (prompt("Enter the first number:"));
// let num2 = (prompt("Enter the second number:"));
// let sum = Number(num1) + Number(num2);
// let difference = Number(num1) - Number(num2);
// let product = Number(num1) * Number(num2);
// let remainder = Number(num1) % Number(num2);
// console.log("Sum: " + sum);
// console.log("Difference: " + difference);
// console.log("Product: " + product);
// console.log("Remainder: " + remainder);
//op:Sum: 15
//    Difference: 5
//    Product: 50
//    Remainder: 5

//Create an array of 5 numbers and use a loop to print only the numbers greater than 10.
// let numbers = [5, 15, 8, 12, 3];
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] > 10){
//         console.log(numbers[i]);
//     }
// }
// //  o/p:15 12

//Take a user's age using prompt(). Use a conditional statement to check eligibility, then display the result using alert().
// let age = (prompt("Enter your age:"));
// if(age >= 18){
//     alert("You are eligible for the program.");
// }
// else{
//     alert("Not eligible: age requirement not met.");
// }
//op:You are eligible for the program.

//Take a number using prompt() and check if it's even or odd. Display the result using alert().
// let num = (prompt("Enter a number:"));//2
// if(num % 2 === 0){
//     alert("The number is even.");
// }
// else{
//     alert("The number is odd.");
// }
//op:The number is even.