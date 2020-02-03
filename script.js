function sigma(num){
    var sum = 0;
    for (let i = 0; i < num; i++) {
       console.log(i+1);
        sum += i+1;    
    }
    return sum;
}
function factorial(num) {
    var mul = 1;
    for (let i = 1; i <= num; i++) {
        console.log(i);
        mul = mul * i;
    }
    return mul;
}
function fibonacci(num) {
    var a = 1, b = 0, temp;

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
        console.log(a,'+',b);
    }

}
function penul(array){
    console.log(array.length);
    
    if (array.length <= 2) {
        console.log("Array pequeno");
        return null;
    }
    else{
        console.log("array Correcto");
        console.log(array)
        return array[array.length-2];
    }
   
}

function ultimo(array,x){
    if (array.length <= x) {
        console.log("Array pequeno");
        return null;
    }else{
        console.log(array);
        return array[array.length - (x)]
    }

}
function second(array){
    if (array.length < 2)
        return null;
    else {
        if (array[0] > array[1])
            var mayor = array[0], second = array[1];
        else
            var mayor = array[1], second = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] > second) {
                if (array[i] > mayor)
                    mayor = array[i];
                else
                    second = array[i];
            }
        }
        return second;
    }
}
function duplicar(array) {
    var duplicado = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < 2; j++)
            duplicado.push(array[i]);
    }
    return duplicado;
}
console.log(duplicar([4, "Ulysses", 42, false]));

