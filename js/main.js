
function redirecionar(){
    //window.open("https://web.digitalinnovation.one/home"); Abre outra aba!
    window.location.href = "https://web.digitalinnovation.one/home";// Abre na mesma janela!

}

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar!</b>";
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
}

/* Dessa forma passamos o propio elemento como parametro para usarmos a função em mais de um caso.
function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
}
*/

/*function clicou(){
    alert("Obrigado por clicar!")
}*/

//*Concatenando string com Inteiro
//var nome = "Mateus de Matos Leal";
//var idade = 21;
//alert(nome + " tem " + idade + " anos");

//*Manipulando string
//var frase = "Japão é melhor do mundo";
//alert(frase.replace("Japão", "Brasil"));

//*Manipulando Variaveis tipo Inteiro
//var n1 = 5;
//var n2 = 3;
//console.log(n1 * n2);

//*Manipulando array
//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop("maça");
//console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" - "));

//*Manipulando objetos
//var fruta = {nome: "maça", cor:"vermelha"}
//console.log(fruta.nome);
//alert(fruta.cor);

//*Condicionais
//var idade = prompt("Qual é sua idade?");
//if(idade >= 18){
//    alert("Maior de idade");
//}
//else{
//   alert("Menor de idade");
//}

//Estrutura de repetição While
/*
var count = 5;
while(count < 5){
    console.log(count);
    cont = cont + 1;
}
*/ 

//Estrutura de repetição FOR
/*
var count;
for(cont=0; count <= 5; count++){
    alert(count);
}
*/

//Utilizando a data atual
//var d = new Date();
//alert(d);

//*Funções
/*
function soma(n1, n2){
    return n1 + n2;
}
alert (soma(5, 10))
*/