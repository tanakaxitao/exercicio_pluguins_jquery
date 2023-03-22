$(document).ready(function () {
  $("#cpf").mask("000.000.000-00");
  $("#telefone").mask("(00) 00000-0000");
  $("#cep").mask("99.999-999");

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      cep: {
        required: true,
      },
      email: {
        required: true,
      },
      telefone: {
        required: true,
      },
      cpf: {
        required: true,
      },
      endereço: {
        required: true,
      },
    },
    messages: {
      nome: "por favor insira o seu nome!",
      cep: "por favor, isira o seu cep!",
      email: "por favor insira seu email",
      telefone: "por favor insira seu telefone!",
      cpf: "por favor insira seu cpf!",
      endereço: "por favor insira seu endereço!",
    },
    submitHandler: function (form) {
      const nome = $("#nome").val();
      alert(`cadastro de ${nome} feito com sucesso!`);
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`existe ${camposIncorretos} campos incorretos!`);
      }
    },
  });
});
