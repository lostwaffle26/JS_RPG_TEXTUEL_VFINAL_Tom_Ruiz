
function play() {
    const menuElement = document.getElementById('menu');
    menuElement.style.display = "none";
    document.getElementById("newgame").style.display = "block";
    document.getElementById("back-button").style.display = "block";
}


function race(x){ 
    document.getElementById(x).style.display = "block";
    let username = prompt("Entrez votre nom :");
    document.getElementById("username").innerHTML = username;
    document.getElementById("username1").innerHTML = username;
    document.getElementById("newgame").style.display = "none";
    document.getElementById("container1").style.display = "block";
}


function combatphase(){
    document.getElementById("container1").style.display = "none";
    document.getElementById("fight").style.display = "block";
  
}

//phase de combat

const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');

let state = {};

function startGame() {
  state = {};
  showTextNode(1);
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
  textElement.innerText = textNode.text;
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button');
      button.innerText = option.text;
      button.classList.add('btn');
      button.addEventListener('click', () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    return startGame();
  }
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
}

const textNodes = [
  {
    id: 1,
    text: "Avant de partir votre oncle qui est connu pour avoir parcouru tout le continent vous donne un la dague qu'il lui a permis de se défendre pendant ses aventures. Le vieux Gandalf vous propose de voler l'anneau de votre oncle qu'il a récupérer il y a longtemps lors d'un combat d'énigmes contre une créature nommée Gollum. Le vieux vosu dit que cet anneau contient un pouvoir mystique.",
    options: [
      {
        text: "Prendre l'anneau",
        setState: { anneau: true },
        nextText: 2
      },
      {
        text: "Laisser l'anneau",
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: "Vous arrivez devant un panneau indiquant 3 directions, votre choix est crucial.",
    options: [
        {
            text: 'Partir pour Fendeval',
            nextText: 3
          },
          {
            text: 'Partir pour le Gondor',
            nextText: 4
          },
          {
            text: 'Partir pour le Mordor',
            nextText: 5
          }
    ]
  },
  {
    id: 3,
    text: "Vous arrivez à Fendeval, vous croisez le chemin d'un mysterieux Elfe du nom de 'Lesgodasses', il vous emmène auprès du roi des Elfes Elrond",
    options: [
      {
        text: 'Le suivre',
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: "Vous arrivez au Gondor et souhaitez boire une bière dans une auberge, un mysterieux homme capuché vous dit que vous n etes pas en sécurité ici et qu il sait qui vous êtes, il vous emmène chez lui quand tout a coup un Homme crit : MAIS C EST " + this.username,
    options: [
      {
        text: "Mettre l'anneau a votre doigt et disparaitre",
            requiredState: (currentState) => currentState.anneau,
        nextText: 8
      },
      {
        text: 'ignorer les Hommes qui vous courent dessus.',
        nextText: 9
      }
    ]
  },
  {
    id: 5,
    text: "Vous arrivez au mordor et une orde d'orques vous capture puis vous emmène à Sauron le grand méchant, il sait qui vous êtes veut votre anneau",
    options: [
        {
            text: "Mettre l'anneau à votre doigt et vous enfuir",
                requiredState: (currentState) => currentState.anneau,
            nextText: 11
          },
        {
        text: "Dire que vous ne savez pas ce que vous faites ici",
        nextText: 10
        }
    ]
  },
  {
    id: 6,
    text: "Une réunion de tout les représentants des royaumes avait lieux à Fendeval, soudain Elrond le roi s'exclame: " + this.username + "!! Voici l'élu ! il possède l'anneau et lui seul pourra arrêter Sauron. La réunion continue et qu'il faut détruire l'anneau à l'endroit où il à été créé mais personne n'arrive à se décider pour savoir qui doit le jeter dans les aysses d'Orodruin.",
    options: [
        {
            text: "Prendre la décision de le faire",
                requiredState: (currentState) => currentState.anneau,
            nextText: 12
          },
        {
        text: "Vous n'êtes pas assez courageux pour y aller",
        nextText: 13
        }
    ]
  },
  {
    id: 8,
    text: "L'homme mystérieux vous dis qu'il s'appelle Aragorn, il vous prévient qu'une horde de Nazgul est à vos trousses car ils peuvent sentir l'anneau que vous gardez, il vous propose de le suivre jusqu'à Fendeval où il pourra accomplir sa destiné",
    options: [
      {
        text: 'Le suivre',
        nextText: 6
      }
    ]
  },
  {
    id: 9,
    text: "Les hommes veulent absolument s'emparer de votre anneau et vous tuent pour le récuperer.",
    options: [
      {
        text: 'Recommencer',
        nextText: -1
      }
    ]
  }, 

  {
    id: 10,
    text: "Sauron vous tue car il n'a pas besoin de vous",
    options: [
      {
        text: 'Recommencer',
        nextText: -1
      }
    ]
  },

  {
    id: 11,
    text: "Sauron vous interpelle grâce à ses pouvoirs très puissants et récupère votre anneau, il vous tue, récupère sa forme humaine et détruit tout les royaumes de la Terre du centre.",
    options: [
      {
        text: 'Recommencer',
        nextText: -1
      }
    ]
  },
  {
    id: 13,
    text: "Vous rentrez chez vous et Sauron fini par détruire toute les contrés de la Terre du Milieu.",
    options: [
      {
        text: 'Recommencer',
        nextText: -1
      }
    ]
  },
{
    id: 12,
    text: "Vous partez donc à l'aventure vers le Mont Destin, pendant votre traversé une armée d'Orques vosu barent la route ",
    options: [
      {
        text: 'Attaquer',
      }
    ]
  },

]

startGame()


function settings() {
    const menuElement = document.getElementById('menu');
    menuElement.style.display = "none";
}

function infos() {
    const menuElement = document.getElementById('menu');
    menuElement.style.display = "none";
}

function back() {
    document.location.reload(true);
}

/*
  {
    id: 3,
    text: '',
    options: [
        {
            text: 'Trade the goo for a sword',
            requiredState: (currentState) => currentState.anneau,
            setState: { anneau: false, sword: true },
            nextText: 3
          },
          {
            text: 'Trade the goo for a shield',
            requiredState: (currentState) => currentState.anneau,
            setState: { anneau: false, shield: true },
            nextText: 3
          },
          {
            text: 'Ignore the merchant',
            nextText: 3
          }
      
    ]
  },
*/