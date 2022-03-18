var carta1 = {
    nome: "Bulbasaur",
    imagem:
      "https://images-americanas.b2w.io/produtos/3895697805/imagens/bulbasaur-pelucia-pokemon-luxo-licenciada-30cm-bulbassauro/3895697821_1_large.jpg",
    frame: "https://e1.pngegg.com/pngimages/717/244/png-clipart-blanks-classic-cards-pokemon-trading-card-illustration-thumbnail.png",
    atributos: {
      ataque: 4,
      defesa: 8,
      agilidade: 6
    }
  };
  
  var carta2 = {
    nome: "Charmander",
    imagem:
      "https://a-static.mlcdn.com.br/1500x1500/charmander-c1-27cm-pelucia-pokemon-reborn-simporte-presente/peluciadetona/7916225413/5fadc0ae634fff3f58af19317b59104f.jpg",
    frame: "",
    atributos: {
      ataque: 8,
      defesa: 4,
      agilidade: 6
    }
  };
  
  var carta3 = {
    nome: "Squirtle",
    imagem: "https://m.media-amazon.com/images/I/41ggSOkPUWL._AC_.jpg",
    frame: "https://e1.pngegg.com/pngimages/292/997/png-clipart-blanks-classic-cards-pokemon-trading-card-thumbnail.png",
    atributos: {
      ataque: 7,
      defesa: 4,
      agilidade: 7
    }
  };
  
  var carta4 = {
    nome: "Pikachu",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_630964-MLB43279120042_082020-O.jpg",
    frame: "https://e1.pngegg.com/pngimages/805/502/png-clipart-blanks-classic-cards-pokemon-trading-card-thumbnail.png",
    atributos: {
      ataque: 5,
      defesa: 5,
      agilidade: 8
    }
  };
  
  var carta5 = {
    nome: "Jigglypuff",
    imagem:
      "https://img.elo7.com.br/product/original/2980C76/jigglypuff-pokemon-pelucia.jpg",
    frame: "https://e1.pngegg.com/pngimages/190/630/png-clipart-blanks-classic-cards-pokemon-trading-card-thumbnail.png",
    atributos: {
      ataque: 4,
      defesa: 7,
      agilidade: 7
    }
  };
  
  var carta6 = {
    nome: "Eeve",
    imagem:
      "https://a-static.mlcdn.com.br/1500x1500/pokemon-pelucia-de-20-cm-eevee-sunny-brinquedos/focosimportacaoeexportacaoltda/2608k/938f8d9459a54831259fe4d347aff8c1.jpg",
    frame: "https://e1.pngegg.com/pngimages/190/630/png-clipart-blanks-classic-cards-pokemon-trading-card-thumbnail.png",
    atributos: {
      ataque: 6,
      defesa: 6,
      agilidade: 6
    }
  };
  
  var carta7 = {
    nome: "Ditto",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_919186-MLB25742231176_072017-O.jpg",
    frame: "https://e1.pngegg.com/pngimages/190/630/png-clipart-blanks-classic-cards-pokemon-trading-card-thumbnail.png",
    atributos: {
      ataque: 6,
      defesa: 6,
      agilidade: 6
    }
  };
  
  var carta8 = {
    nome: "Snorlax",
    imagem:
      "https://cdn.awsli.com.br/800x800/297/297688/produto/33190224/fa8c992897.jpg",
    frame: "https://e1.pngegg.com/pngimages/190/630/png-clipart-blanks-classic-cards-pokemon-trading-card-thumbnail.png",
    atributos: {
      ataque: 6,
      defesa: 9,
      agilidade: 3
    }
  };
  
  var carta9 = {
    nome: "Machop",
    imagem:
      "https://nafila.pt/1_wp-upload/thumbs-Superpot%C3%AAncia-machop-brinquedo-de-pel%C3%BAcia-anime-figura_3402.jpg",
    frame: "https://e1.pngegg.com/pngimages/997/786/png-clipart-blanks-classic-cards-pokemon-trading-card-thumbnail.png",
    atributos: {
      ataque: 9,
      defesa: 6,
      agilidade: 3
    }
  };
  
  var carta10 = {
    nome: "Ratata",
    imagem:
      "https://www.ulti.pt/159521_images/12cm-novo-rattata-brinquedo-de-pel%C3%BAcia-macia-animal-1_upload.jpg",
    frame: "https://e1.pngegg.com/pngimages/190/630/png-clipart-blanks-classic-cards-pokemon-trading-card-thumbnail.png",
    atributos: {
      ataque: 3,
      defesa: 6,
      agilidade: 9
    }
  };
  var cartaMaquina;
  var cartaJogador;
  var cartas = [
    carta1,
    carta2,
    carta3,
    carta4,
    carta5,
    carta6,
    carta7,
    carta8,
    carta9,
    carta10
  ];
  
  function sortearCarta() {
    // Para limpar a tela do sorteio anterior
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(https://img.quizur.com/f/img5e53e55e12c707.08575669.png?lastEdited=1582556569)`;
    
    // Zerando os atriburtos da carta da máquina
     var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
  
    divCartaMaquina.innerHTML = moldura + tagHTML + opcoesTexto + "</div>";
    
    // Sorteio da carta da máquina
    var numeroCartaMaquina = parseInt(Math.random() * 10);
    cartaMaquina = cartas[numeroCartaMaquina];
  
    // Sorteio da carta do jogador
    var numeroCartaJogador = parseInt(Math.random() * 10);
    while (numeroCartaJogador == numeroCartaMaquina) {
      numeroCartaJogador = parseInt(Math.random() * 10);
    }
    cartaJogador = cartas[numeroCartaJogador];
    // COMO IMPRIMIR OS VALORES E IMAGEM DA CARTA NA TELA?
  
    // Desabilitando a opção de troca de carta
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCartaJogador();
  }
  // COMO MELHORAR A VISUALIZAÇÃO DAS OPÇÕES DE ATRIBUTOS?
  /*
    Ataque img src="https://cdn-icons-png.flaticon.com/512/95/95606.png";
    Defesa img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUHsZFHW1gsU1JLw6bTqn8GFMtu-ylkctYYyRyYTp1O9Bg9ymSXGGaXyFJyl8GLBHn9Wk&usqp=CAU";
    Agilidade img src="https://cdn-icons-png.flaticon.com/512/37/37985.png"
    */
  
  function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
  
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked) {
        return radioAtributos[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
  
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Venceu</p>";
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Perdeu</p>";
    } else {
      htmlResultado = "<p class='resultado-final'>Empatou</p>";
    }
    divResultado.innerHTML = htmlResultado;
  
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnSortear").disabled = false;
    exibirCartaMaquina();
  }
  // FALTOU UM BOTÃO DE RESTART DO GAME
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    // $ indica que o código a seguir vem em js
    // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='oppcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function exibirCartaMaquina(){
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }