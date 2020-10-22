  
//Contagem numeros positivos

var valores = [];
var positivos = [];
for (i = 0; i < 6; i++) {
  valores[i] = gets();
  if (valores[i] > 0) {
    positivos.push(valores[i]);
  }

}
console.log(positivos.length + " valores positivos");


//Exibindo Pares

var cont = 1;
var n = gets();
while (cont <= n) {
  var resto = cont % 2;
  if (resto == 0) {
    console.log(cont);
  }
  cont = cont + 1;
}

//Análise de numeros

var positivos = [];
var negativos = [];
var pares = [];
var impares = [];
var valores = [];
    for (i = 0; i < 5; i++){
      valores[i] = gets();
      if( valores[i]%2 == 0){
            pares.push(valores[i]);
        }else{
            impares.push(valores[i]);
        }
          if(valores[i] > 0){
            positivos.push(valores[i]);
        }
        if(valores[i] < 0){
            negativos.push(valores[i]);
        }
}
 console.log(pares.length + " valor(es) par(es)");
 console.log(impares.length + " valor(es) impar(es)");
 console.log(positivos.length + " valor(es) positivo(s)");
 console.log(negativos.length + " valor(es) negativo(s)");

// contagem de células

valor = parseInt(gets());
console.log(valor)

v100 = valor / 100;
valor = valor % 100;

v50 = valor / 50;
valor = valor % 50;

v20 = valor / 20;
valor = valor % 20;

v10 = valor / 10;
valor = valor % 10;

v5 = valor / 5;
valor = valor % 5;

v2 = valor / 2;
valor = valor % 2;

v1 = valor / 1;
valor = valor % 1;

console.log(parseInt(v100) + " nota(s) de R$ 100,00");
console.log(parseInt(v50) + " nota(s) de R$ 50,00");
console.log(parseInt(v20) + " nota(s) de R$ 20,00");
console.log(parseInt(v10) + " nota(s) de R$ 10,00");
console.log(parseInt(v5) + " nota(s) de R$ 5,00");
console.log(parseInt(v2) + " nota(s) de R$ 2,00");
console.log(parseInt(v1) + " nota(s) de R$ 1,00");

//Cosumo médio Automovel

var valores = [];
var result = [];
    for (i = 0; i < 2; i++){
        valores[i] = gets();
        if(valores[i] > 0){
            result.push(valores[i]);
          }

    }
    media = result[0] / result [1];
    

 console.log(media.toFixed(3) + " km/l");