//Inserir um console.log para ser o titulo
//criar 3 variaveis sem pâmetro(nome, anoNascimento, anoAtual)
//criar uma função sem parametro que calcula idade, usando return
//chamar a função e mostrar o resultado
//--------

//Criar uma função com pârametros para fazer o mesmo cálculo de idade da questão acima
// ----------------

// criar uma função com pârametro e return para mostrar a quantidade de DIAS vividos
//----------

// criar uma função para verificar sé é maior de idade (com if e else)
console.log('CALCULADORA DE IDADE')
let nome = 'Lucas';
let anoNascimento = 2007;
let anoAtual = 2025;

function calcularIdade() {
    return anoAtual - anoNascimento;
}
console.log(`A idade de ${nome} é de ${calcularIdade()} anos.`)

function diasVividos(anoAtual, anoNascimento) {
  return anoAtual - anoNascimento * 365;
}

const dias = diasVividos(idade);
console.log("Dias vividos:", dias);

function verificarMaiorIdade(idade) {
  if (idade >= 18) {
    return "É maior de idade";
  } else {
    return "É menor de idade";
  }
}

const maiorIdade = verificarMaiorIdade(idade2);
console.log("Situação:", maiorIdade);



//criar um progama que valide se uma pessoa terá desconto na entrada do cinema.
// criar 3 variaveis (idade, estudante, precoIngresso). Fazer confição para dar 50% de desconto caso a condição 'estudante' seja true

let idade = 20;            
let estudante = true;      
let precoIngresso = 30;    


let valorFinal;

if (estudante === true) {
  precoIngresso = precoIngresso / 2;
    console.log(`Preço com desconto: R$ ${precoIngresso}`)
} else {
        console.log(`Preço normal: R$ ${precoIngresso}`)
}

// ---------------
// Calcularde IMC 

let peso = 85;
let altura = 1,81;
let imc = peso / (altura * altura):

console.log('Seu imc é: ' + imc.toFixed(2));