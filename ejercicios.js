// Operadores de comparación
// 1. Comprueba si 10 es mayor o igual que 9 e imprime el resultado en consola.
function compareTenAndNine() {
    const result = 10 <= 9; console.log(result); 
}
compareTenAndNine();

// 2. Comprueba si 0 es igual a 0 e imprime el resultado en consola.
function compareZeroAndZero() {
    const result = 0 === 0; console.log(result)
}
compareZeroAndZero()

// 3. Comprueba si 7 es mayor que 8 y menor que 10, e imprime el resultado en consola.
function compareSeven() {
    const result = 7 > 8 < 10; console.log(result)
}
compareSeven()

// Operadores lógicos
// 4. Verifica si puedes comprar un producto de 1500 con un descuento del 25% teniendo 1150€ e imprime si puedes o no.
function canBuyProduct() {
    const precio = 1500; 
    const descuento = 0.25; 
    const dineroDisponible = 1150; 
    const precioDescuento = precio * descuento; 
    const canAfford = dineroDisponible >= precioDescuento; 
    console.log(canAfford && "Puedo comprar." || "No puedo comprar.");
}
canBuyProduct()

// Variables
// 5. Crea una variable llamada `mensaje` y asígnale el valor "Hola JavaScript", luego imprime la variable en consola.
function createMessageVariable() {
    let mensaje = "Hola JavasCript"
    console.log(mensaje);
}
createMessageVariable()

// 6. Crea una variable llamada `resultado` y asígnale la suma de 2 y 3, luego imprime la variable en consola.
function createSumVariable() {
    let resultado = 2 + 3; 
    console.log(resultado); 
}
createSumVariable()

// 7. Crea una constante llamada `IS_DISABLED` y asígnale el valor booleano `true`, luego imprime la constante en consola.
function createDisabledConstant() {
    const IS_DISABLED = true; 
    console.log(IS_DISABLED);
}
createDisabledConstant()

// Null y Undefined
// 8. Crea una variable con `let` llamada `capacidad` y asígnale un valor `null`, luego imprime la variable en consola.
function createNullVariable() {
    let capacidad = null; 
    console.log(capacidad); 
}
createNullVariable()

// 9. Crea una variable con `let` llamada `dinero` y asígnale un valor `undefined`, luego imprime la variable en consola.
function createUndefinedVariable() {
    let dinero = undefined;
    console.log(dinero);
}
createUndefinedVariable()

// typeof
// 10. Escribe un código para ver el tipo de una variable llamada `userName` e imprime el tipo de dato en consola.
function checkUserNameType() {
    let userName = undefined;
    console.log(typeof userName)
}
checkUserNameType()

// 11. Asegúrate de que `dogId` es una cadena de texto y luego imprime el tipo de dato en consola.
function checkDogIdIsString() {
    let dogId = "es un texto";
    console.log(typeof dogId);
}
checkDogIdIsString()

// console.log()
// 12. Imprime un mensaje en la consola utilizando `console.log()`.
function logMessage() {
    let mensaje = "estoy aprendiendo Javascript";
    console.log(mensaje); 
}
logMessage()

// 13. Utiliza `console.log()` para imprimir el valor de la variable `edad` que tiene el valor 30.
function logAge() {
    let edad = 30;
    console.log(edad);
}
logAge() 

// 14. Muestra el mensaje 'La versión de JavaScript es' seguido de la variable `version` con el valor 2024 usando `console.log()`.
function logVersion() {
    let mensaje = "La version de JavasCript es ";
    let version = "2024.";
    console.log(mensaje + version);
}
logVersion()

// Exportar todas las funciones para poder usarlas en las pruebas
module.exports = {
    compareTenAndNine,
    compareZeroAndZero,
    compareSeven,
    canBuyProduct,
    createMessageVariable,
    createSumVariable,
    createDisabledConstant,
    createNullVariable,
    createUndefinedVariable,
    checkUserNameType,
    checkDogIdIsString,
    logMessage,
    logAge,
    logVersion,
};