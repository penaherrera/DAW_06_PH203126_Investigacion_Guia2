/*Tarea complementaria DAW guia-2 */
//Nota: Este archivo puede ser ejecutado con la extension Quokka y no usar la consola de los navegadores.

/*
abs(): Devuelve el valor absoluto de un número, es decir, su valor numérico sin signo.
Ejemplo:
*/
const num = -5;
const absValue = Math.abs(num);
console.log(absValue);

/*
round(): Redondea un número al entero más cercano.
Ejemplo:
*/
const numR = 3.7;
const roundedValue = Math.round(numR);
console.log(roundedValue);

/*
ceil(): Devuelve el siguiente entero mayor o igual al número proporcionado.
Ejemplo:
*/
const numC = 4.1;
const ceilValue = Math.ceil(numC);
console.log(ceilValue);

/*
floor(): Devuelve el siguiente entero menor o igual al número proporcionado.
Ejemplo:
*/
const numF = 4.9;
const floorValue = Math.floor(numF);
console.log(floorValue);

/*
exp(): Devuelve el valor de la función exponencial (e^x) para el número proporcionado.
Ejemplo:
*/
const x = 2;
const expValue = Math.exp(x);
console.log(expValue);

/*
log(): Devuelve el logaritmo natural (base e) de un número.
Ejemplo:
*/
const numL = 10;
const logValue = Math.log(numL);
console.log(logValue);

/*
random(): Devuelve un número pseudoaleatorio entre 0 (inclusive) y 1 (exclusivo).
Ejemplo:
*/
const randomValue = Math.random();
console.log(randomValue);

/*2. Métodos push() y pop() en arrays:
push(): Agrega uno o más elementos al final de un array.
pop(): Elimina el último elemento de un array y lo devuelve.
*/
const colors = ["red", "green", "blue"];
colors.push("yellow");
console.log(colors);
const removedColor = colors.pop();
console.log(colors);

/*3. Función matricial reverse():
La función reverse() se utiliza para invertir el orden de los elementos en un array.
Modifica el array original y devuelve una referencia al array invertido.
Ejemplo:
*/
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers);
