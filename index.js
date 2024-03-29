/*OBJETIVO - quando clicarmos na aba temos que mostrar o conteúdo da aba que foi clicada pelo usuário e esconder o conteúdo da aba anterior

passo 1 - pegar os elementos que representam as abas no HTML*/

const abas = document.querySelectorAll(".aba");

//passo 2 - identificar o clique no elemento da aba

abas.forEach(aba => {
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)

        mostrarInformacoesDaAba(aba)

    });
});

function selecionarAba(aba){
    //passo 3 - quando o usuário clicar, desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    //passo 4 - marcar a aba clicada como selecionado
    aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba){
    //passo 5 - esconder o conteúdo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    //passo 6 - mostrar o conteúdo da aba selecionada
    const idDoElementodeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementodeInformacoesDaAba);

    informacaoASerMostrada.classList.add("selecionado");
}

// Trocar imagem

$('.change').click((e) => {
    var img1 = './imgs/close.png';
    var img2 = './imgs/close-edit-astronauta.png';
    var element = $('.img-change');
    if(element.attr('src') === img1){
      element.attr('src',img2);
    }else if(element.attr('src') === img2){
      element.attr('src',img1);
    }
});

// Alt text
  $(".foto-perfil").wrap('<div class="alt-wrap"/>');

  $(".foto-perfil").each(function() {
    $(this).after('<p class="alt">' + $(this).attr('alt') + '</p>');
  })








