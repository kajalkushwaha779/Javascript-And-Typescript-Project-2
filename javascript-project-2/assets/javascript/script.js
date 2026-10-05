// 1. Develop the program to reverse the number
let num1 = 12345;
document.getElementById('num1').innerHTML = `Number is => ${String(num1)}`;
let rev_clone = num1;
let rev_number = 0;
while (rev_clone != 0) {
    let rev = rev_clone % 10;
    rev_number = (rev_number * 10) + rev;
    rev_clone = Math.floor(rev_clone / 10);
}
document.getElementById('rev_num').innerHTML = `Reverse Number of ${num1} is ${rev_number}.`;
// 2. Develop a program to check whether a number is a palindrome.
let num2 = 990;
document.getElementById('num2').innerHTML = `Number is => ${String(num2)}`;
let rev_clone_2 = num2;
let rev_number_2 = 0;
while (rev_clone_2 != 0) {
    let rev = rev_clone_2 % 10;
    rev_number_2 = (rev_number_2 * 10) + rev;
    rev_clone_2 = Math.floor(rev_clone_2 / 10);
}
if (rev_number_2 == num2) {
    document.getElementById('palindrome').innerHTML = `${num2} is Palindrome Number`;
}
else {
    document.getElementById('palindrome').innerHTML = `${num2} is not Palindrome Number`;
}
// 3. Write a program to print the Fibonacci series up to n terms using a loop
let num3 = 6;
document.getElementById('num3').innerHTML = `Fibonacci Range is => ${String(num3)}`;
let a = 0;
let b = 1;
let fibonacci_str = '';
while (num3 > 0) {
    let fibonacci_sum = a + b;
    fibonacci_str += " " + a;
    a = b;
    b = fibonacci_sum;
    num3--;
}
document.getElementById('fibonacci').innerHTML = `Fibonacci Series is => ${fibonacci_str}`;
// 4. Create a program to find the factorial of a number using a loop.
let num4 = 3;
document.getElementById('num4').innerHTML = `Number is => ${String(num4)}`;
let fact = 1;
for (let i = 1; i <= num4; i++) {
    fact *= i;
}
document.getElementById('factorial').innerHTML = `The Factorial of ${num4} is ${fact} `;
// 5. Develop a program to check whether a number is a prime number.
let num5 = 405;
document.getElementById('num5').innerHTML = `Number is => ${String(num5)}`;
let count = 0;
for (let i = 2; i < num5; i++) {
    if (num5 % i === 0) {
        count++;
    }
}
if (count == 0) {
    document.getElementById('prime_num').innerHTML = `${num5} is Prime Number`;
}
else {
    document.getElementById('prime_num').innerHTML = `${num5} is not a Prime Number`;
}
// 6. Write a program to count the total number of digits in a given number.
let num6 = 1990;
document.getElementById('num6').innerHTML = `Number is => ${String(num6)}`;
let num6_clone = num6;
let counter = 0;
while (num6_clone != 0) {
    num6_clone = Math.floor(num6_clone / 10);
    counter++;
}
document.getElementById('digit_counter').innerHTML = `Total Digits in ${num6} is ${counter}`;
// 7. Create a program to calculate the sum of digits of a number.
let num7 = 2098;
document.getElementById('num7').innerHTML = `Number is => ${String(num7)}`;
let num7_clone = num7;
let sum = 0;
while (num7_clone != 0) {
    let rev = num7_clone % 10;
    sum += rev;
    num7_clone = Math.floor(num7_clone / 10);
}
document.getElementById('digit_sum').innerHTML = `Sum of ${num7} is ${sum}`;
// 8. Develop a program to check whether a number is an Armstrong number.
let num8 = 256;
document.getElementById('num8').innerHTML = `Number is => ${String(num8)}`;
let num8_clone = num8;
let armstrong_sum = 0;
let armstrong_count = 0;
while (num8_clone != 0) {
    num8_clone = Math.floor(num8_clone / 10);
    armstrong_count++;
}
num8_clone = num8;
while (num8_clone != 0) {
    let rev = num8_clone % 10;
    armstrong_sum += Math.pow(rev, armstrong_count);
    num8_clone = Math.floor(num8_clone / 10);
}
if (armstrong_sum === num8) {
    document.getElementById('armstrong').innerHTML = `${num8} is an Armstrong Number`;
}
else {
    document.getElementById('armstrong').innerHTML = `${num8} is not an Armstrong Number`;
}
// 9. Write a program to calculate the power of a number using a loop.
let num9 = 7;
document.getElementById('num9').innerHTML = `Number is => ${String(num9)}`;
let num9_clone = num9;
let base_num = 4;
document.getElementById('base-num').innerHTML = `Base Number is => ${String(base_num)}`;
let base_clone = base_num;
let power_ans = 1;
while (base_num > 0) {
    power_ans = power_ans * num9_clone;
    base_num--;
}
document.getElementById('power').innerHTML = `Power of ${num9}^${base_clone} is ${power_ans}`;
// 10. Create a program to print the following number pattern:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
let pattern1 = document.getElementById('pattern1');
let pattern_str1 = '';
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        pattern_str1 += j + ' ';
    }
    pattern_str1 += "<br/>";
}
pattern1.innerHTML = pattern_str1;
// 11. Create a program to print the following number pattern:
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2 
// 1 
let pattern2 = document.getElementById('pattern2');
let pattern_str2 = '';
for (let i = 5; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        pattern_str2 += j + ' ';
    }
    pattern_str2 += "<br/>";
}
pattern2.innerHTML = pattern_str2;
// 12. Create a program to print the following number pattern:
// 1 2 3 4 5
//   1 2 3 4
//     1 2 3
//       1 2 
//         1  
let pattern3 = document.getElementById('pattern3');
let pattern_str3 = '';
for (let i = 5; i >= 1; i--) {
    for (let s = 5; s > i; s--) {
        pattern_str3 += '_ ';
    }
    for (let j = 1; j <= i; j++) {
        pattern_str3 += j + ' ';
    }
    pattern_str3 += "<br/>";
}
pattern3.innerHTML = pattern_str3;
// 13. Create a program to print the following number pattern:
//          1 
//        1 2 
//      1 2 3
//    1 2 3 4 
//  1 2 3 4 5  
let pattern4 = document.getElementById('pattern4');
let pattern_str4 = '';
for (let i = 1; i <= 5; i++) {
    for (let s = 5; s > i; s--) {
        pattern_str4 += '_ ';
    }
    for (let j = 1; j <= i; j++) {
        pattern_str4 += j + ' ';
    }
    pattern_str4 += "<br/>";
}
pattern4.innerHTML = pattern_str4;