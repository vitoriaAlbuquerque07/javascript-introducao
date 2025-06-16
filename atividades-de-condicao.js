// questao 1

// let idade = 18;
// if (idade >= 18 ){
//     console.log("maior de idade");
    
// } else{
//     console.log("menor de idade");
// }
//  questao 2
let Numero = 40;

if(!Numero || typeof Numero != "number"){
    console.log("digite um numero valido");
    return;
}



let numero = 2;
if(numero > 0){
    console.log(`${numero} é positivo` );
}

else if (numero < 0){
    console.log(`${numero} é negativo`);
}

else{
    console.log(`é zero`);
}