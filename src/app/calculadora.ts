function operar(operacion: string = "", a: number, b: number) {
    if (operacion === 'suma') {
        return suma(a, b);
    } else if (operacion === 'resta') {
        return restar(a, b);
    }else if (operacion === 'multiplica') {
        return multiplicar(a, b);
    }else if (operacion === 'divide') {
        return dividir(a, b);
    }else if (operacion === 'potencia') {
        return potenciar(a, b);
    }else if (operacion === 'factor') {
        return factorial(a);
    }
}

function suma(a: number, b: number) {
    if (a === undefined || b === undefined) {
        throw new Error("No se puede sumar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a + b;
}

function restar(a: number, b: number) {
    if (a === undefined || b === undefined) {

        throw new Error("No se puede restar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a - b;
}

function multiplicar(a: number, b: number) {
    if (a === undefined || b === undefined) {
        throw new Error("No se puede multiplicar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a * b;
}

function dividir(a: number, b: number) {
    if (a === undefined || b === undefined) {
        throw new Error("No se puede dividir indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a / b;
}

function potenciar(a: number, b: number) {
    if (a === undefined || b === undefined) {
        throw new Error("No se puede potenciar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a ** b;
}

function factorial(a: number) {

    
    let result = 1;
    for (let i = 2; i <= a; i++) {
        result *= i;
    }
    return result;
}

export { suma, operar, restar ,multiplicar,dividir,potenciar,factorial};