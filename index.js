//===Math methods==//


// let data = [9, 3, 1, 'Peter', 5, 10, 'Karen', 29];
// let size = data.length - 1;
// console.log('Array size:', size);

//console.log('at():', data.at(-1));

 //let middleIndex = Math.trunc(data.length - 1)/ 2;
// console.log("middle elememt:", middleIndex);
// console.log("middle element:", data.slice(middleIndex, middleIndex+2));
//data.slice("middleIndex, middle element", +2);

// let middleIndex = Math.trunc((data.length - 1) / 2);
// if (data.length % 2 == 0) {
//     console.log(data.slice(middleIndex, middleIndex + 2));
// } else {
//     console.log(data[middleIndex]);
// }
   //with one string
// let onlyNumbers = data.splice(3, 1);
// console.log('Max:', Math.max(...data));

   //when we have more than one string 

// let onlyNumbers = data.filter(item => {
//     if (typeof item != 'string')
//         return item;
// })
// console.log('Max:', Math.max(...onlyNumbers));


// const messege = 'hello'
// console.log(messege);

// const another = 'sure'
// console.log(another);

// const date = newDate();
// const year = getYear();

//let data = data.splice[2];

//==string methods==//

// let sentence = 'I love programming';
// console.log(sentence);
// console.log(sentence[0]);
// console.log(sentence.toLowerCase());
// console.log(sentence.split('')); //changes to charectors//with space between the paranthesis they alphabets split  ...
 
//===dates===//
// let myDate = new Date('2022/Nov/29');
// console.log('My date:', myDate.toLocaleDateString());

// function addDays(theDate, days) {
//     return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
//     console.log(addDays)
// } 

// var newDate = addDays(new Date(), 5);
   //========//
//

//===if statement==//
// let age = 17
// if (age > 17) {
//     console.log('You qualify')
//}// else {
//     console.log('You are not qualified');
// }
//nested if statements
// let age = 18;
// let salary = 4990;
// if (age > 17) {
//     if (salary >= 5000) {
//     } console.log('Well done!')
// } else {
//     console.log('You are not qualified');
//} //else {
//     console.log('Bring another reciept');
// }


// let myDate=new Date().getTime()
// let age = 18;
// let salary = 50000;
// if ((age > 17) && (salary >= 5000)) {
//     console.log('well done');
// } else {
//     console.log('Thank you for coming!');
// }
//use logical operators such as && ,||, !, for 2 or more statements


//switch statement//
// let monthInt = 1;
// switch (monthInt) {
//     case 1:
//         console.log('January');
//     //break;
//     case 2:
//         console.log('February');
//     break;
// }


// let grade = 100;
// switch (grade) {
//     case 100:
//         console.log('You are awesome!');
//         break;
//     case 99:
//         console.log('you did well');
//             break;
// }

//===conditionals===//

// let x = '10';

// if (x === 10) {
//    console.log('something');
// } else {
//    console.log('anything');
// }

// let x = 5;
// if (x >= 10 && x <= 20) {
//    console.log('something');
// } else if(x===5) {
//    console.log('anything');
// }

// let x = 5;
// if (x >= 10 && x <= 20 || x <= 10 && x >= 5){
//    console.log('something');
// }

// let y;// because y has no value so it not defined//
// if ((y >= 10 && x <= 20) || (y === undefined)){
//    console.log('something');
// }


// let marks = 40;
// switch (marks) {
//    case 100:
//       console.log('you have done well very amazingly');
//       break;
//    case 50:
//       console.log('you have did well');
//       break;
//    case 60:
//       console.log('you are amazing!');
//       break;
//    case 70:
//       console.log('you did amazing');
//       break;
//    case 80:
//       console.log('you have done well giiirl');
//       break;
//    case 90:
//       console.log('congratulations');
//       break;
//    default:
//       console.log('yho! yho! yho! weeeh ungayeki nje!')
//       break;
// }

// let marks = 50;
// switch (true) {
//    case 100:
//       console.log('you have done very amazingly');
//       break;
//    case (marks >= 90 && marks <= 100):
//       console.log('you have done very well');
//       break;
//       default:
//       console.log('try again you can do better next time')
//          ;
//          break;
// }

// ********** LOOPS *********** //

// for (let i = 1; i <= 5; i++){
//    console.log('Hi there', i);
// }

// for (let i = 5; i = 5; i--){
//    if (i % 2 !== 0) console.log(i); //logs out odd no.s
// }

// const cars = [
//    'toyota',
//    'corolla',
//    'mazda'
// ]


// let myCar = {
//    make: 'Toyota',
//    model: 'Corolla',
//    year: '1996',
//    colors: [
//       'red',
//       'yellow',
//       'white'
//    ]
// };
// for (const key in myCar) {
//    console.log(myCar[key]);
   
// }

// for (let index = 0; index < myCar.length; index++){
//    console.log(cars[0]);
// }


//****WHILE LOOP****checks before//
//cnt=counter

// let cnt = 0;
// while (cnt < 10) {
//    console.log(cnt);
//    cnt++;
// }

//***do while loop*** checks after//

// let numbers = [8, 5, 3, 6];
// do {
//    console.log(numbers[cnt]);
//    cnt++;
// } while (cnt < numbers.length);

//***FUNCTIONS***//

// let x = 10;
// let y = 5;

// function add() {

//    let x = document.getElementById('first').value !== undefined ? document.getElementById('first').value : 10;
//    let y = document.getElementById('second').value !== undefined ? document.getElementById('second').value : 10;

//    console.log(x + y);
// }

//====factory functions====

// let person = {
//    name: 'John',
//    surname: 'Doe',
//    age:30
// }

// let person2 = {
//    name: 'Jammie',
//    surname: 'Doe',
//    age:30
// }

// function createPeople(name,surname,age) {
//    return {
//       name,
//       surname,
//       age
//}

// let person1 = createPeople('John', 'Doe', 30);
// console.log(person1);

//constructor functions

// function CreatePerson() {
//    return {
      
//    }
// }

// function Person(name, surname, age) {
//    this.name = name;
//    this.surname = surname;
//    this.age = age;
// }
// let person2 = new Person('John', 'Doe', 30);
// console.log(person2);

//***ONCLICK***//

function addition(e) {
   e.preventDefault();
   let number1 = document.querySelector('#number1').value;
   let number2 = document.querySelector('#number2').value;
   //OUTPUT
   let output = document.querySelector('#output');
   output.innerText = eval(`${number1}+${number2}`);
}

