// alert('1:Kereshki 2:sut 3:suv 4:alpen gold 5:lays 6:sprite 7:cola 8:chips 9:cheers 10:pecheni')

// let numprompt = +prompt('son kiriting')
// if ( numprompt = 1) {
//     console.log('kereshki');
// }

// else if ( numprompt = 2) {
//     console.log('sut');
// }
// else if ( numprompt = 3) {
//     console.log('suv');
// }
// else if ( numprompt = 4) {
//     console.log('alpen gold');
// }
// else if ( numprompt = 5) {
//     console.log('lays');
// }
// else if ( numprompt = 6) {
//     console.log('sprite');

// }
// else if ( numprompt = 7) {
//     console.log('cola');
// }
// else if ( numprompt = 8) {
//     console.log('chips');
// }
// else if ( numprompt = 9) {
//     console.log('cheers');
// }
// else if ( numprompt = 10) {
//     console.log('pecheni');
// }

// else {
//     console.log('Hecnarsa topilmadi');
// }

// let numprompt = +prompt ('yil kiriting')
// if (numprompt % 4 == 0){
//     console.log('kabisi yili');
// }
// else {
//     console.log('kabisiya yili emas');
// }

// let numprompt = +prompt('son kiriting')

// if (numprompt % 2 == 0 ){
//     console.log('2 ga bolinadi');
// }
// else if (numprompt % 3 === 0) {
// console.log('3 ga bolinadi');
// }
// const делимое = parseInt(prompt('Введите делимое:'));

// for (let делитель = 2; делитель <= делимое; делитель++) {
//   if (делимое % делитель === 0) {
//     console.log(делитель);
//   }
// }
// Сгенерировать случайное число от 1 до 100
let randomNumber = (Math.round(Math.random() * 100))
// let randomNumber = prompt('son kiriting')
alert(randomNumber)
if (randomNumber % 3 === 0 && randomNumber % 5 === 0) {
  alert('FizzBuzz');
} else if (randomNumber % 3 === 0) {
alert('Fizz');
} else if (randomNumber % 5 === 0) {
  alert('Buzz');
} else {
  alert('bolinmaydi')
}

