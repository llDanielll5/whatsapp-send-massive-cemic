import { create, Whatsapp, Message, SocketState } from "venom-bot";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// { name: "MARIA DA GUIA PEREIRA DE SOUSA", number: "5571986799999" },
//   { name: "WILLIAN RABELO DOS SANTOS", number: "5561982952423" },
//   { name: "COSME SILVEIRA DE CASTRO", number: "5561974021805" },

//   { name: "JOVINA MARIA DOS PASSOS", number: "5561981556022" },
//   { name: "MARIA TANIA NOGUEIRA DOS SANTOS", number: "5561981736492" },
//   { name: "ALDIRENE SOARES LEITE DA SILVA", number: "5561983409089" },
//   { name: "TAYNARA DA SILVA MARQUES", number: "5561991215359" },
//   { name: "VANDERLAN MENDES TEIXEIRA", number: "5561992055899" },
//   { name: "MARILDE DOS SANTOS DE JESUS", number: "5561985369051" },
//   { name: "ROSANGELA JUSTINO DE LYRA", number: "5561983360722" },
//   { name: "AMELIA FAGUNDES DE LIMA", number: "5561996512785" },
//   { name: "CLAUDIA DO NASCIMENTO DA COSTA", number: "5561984581636" },
//   { name: "MARIA DO SOCORRO NASCIMENTO SILVA", number: "5561984581636" },

// TRIAGEM DIA 25/07/25 =

//   { name: "MARINALVA PEREIRA LIMA", number: "5561991982612" },
//   { name: "COSME SILVEIRA DE CASTRO", number: "5561974021805" },

//   { name: "NEIDE APARECIDA RODRIGUES DA SILA", number: "5561995109414" },

//   { name: "JEREMIAS CAPUCHO", number: "5561982071101" },

//   { name: "RENATO DA SILVA ALVES", number: "5561981597280" },

//   { name: "JOAO LUIS NETO FONSECA", number: "5561981182386" },
//   { name: "CAMILA PEREIRA DE MELO", number: "5561981104730" },
//   { name: "AGINALDO SOARES DE ANDRADE", number: "5561985474792" },
//   { name: "MARINEZ SILVA PEREIRA", number: "5561994371258" },
//   { name: "LUCIANO DA SILVA DOS SANTOS", number: "5561992765115" },
//   { name: "FRANCISCA DO ESPIRITO SANTO", number: "5561993132721" },
//   { name: "MARIA AUCILENE SANTANA MOURA", number: "5561991000311" },
//   { name: "ANTONIO MANOEL DE SOUSA", number: "5561993072800" },
//   { name: "GONÇALA VERONICA DE SOUSA LIMA ALENCAR", number: "5561982915951" },
//   { name: "MARIA DO CARMO PEREIRA DA COSTA", number: "5561984219860" },

//   { name: "DOMICIA SOUSA SANTOS", number: "5561985923910" },
//   { name: "ADMILSON CARNEIRO DE LIMA", number: "5561996662214" },
//   { name: "MARIA DO CARMO GOMES DE CARVALHO", number: "5561993761103" },
//   { name: "MARINA DAS NEVES MARTINS", number: "5561983472029" },
//   { name: "MARIA NEUDE DE SOUSA PEREIRA", number: "5561996800310" },
//   { name: "MARIA PIEDADE DA COSTA", number: "5561991409134" },
//   { name: "ALESSANDRA BARBOSA S MARIANO", number: "5561984824953" },
//   { name: "ALESSANDRA ASSENCIO DUTRA", number: "5561984300001" },

const numbers = [
  // { name: "DIONEIDE DIONIZIO DE OLIVEIRA", number: "5561992012626" },
  // { name: "ANTONIA NUNES DE SOUZA COELHO", number: "5561983231361" },
  // { name: "WEDERSON CARDOSO DE OLIVEIRA JUNIOR", number: "5561991567156" },
  // { name: "JOVINO BATISTA DOS SANTOS", number: "5561999097214" },
  // { name: "MARIA BETANIA BRAGA DE SOUZA", number: "5561982527212" },
  // { name: "SILMA BIAGE DA SILVEIRA", number: "5561996650122" },
  // { name: "ILDECI PEREIRA DOS SANTOS", number: "5561999938094" },
  // { name: "IARA FELICIANA DE OLIVEIRA", number: "5561991823315" },

  // { name: "SULAMITA PEREIRA DE JESUS", number: "5561992346263" },
  // { name: "SIDMARA DE FREITAS", number: "5561982176838" },
  // { name: "FRANCISCO DIONIZIO DA SILVA", number: "5561992012626" },
  // { name: "LILIANE FERREIRA BARBOSA", number: "5561985410681" },
  // { name: "MARIA DO CARMO GOMES DE CARVALHO", number: "5561993761103" },
  // { name: "IDALVANICE PAULINO BATISTA", number: "5561984151436" },
  // { name: "MICHELLINE CARDOSO DE CARVALHO", number: "5561984929427" },
  // { name: "GUILHERME DA COSTA RODRIGUES", number: "5561998378366" },
  // { name: "RITA BARRETO DE SALES OLIVEIRA", number: "5561992182999" },
  // { name: "VALDECI DOURADO DA SILVEIRA", number: "5561999832153" },
  // { name: "ANTONIO VILARINHO DA SILVA", number: "5561992864948" },
  // { name: "JOAO RODRIGUES SOBRINHO", number: "5561993140365" },
  // { name: "LUCIANA DA CONCEIÇÃO SILVA", number: "5561996683147" },
  // { name: "KATIELLE RODRIGUES ALENCAR", number: "5561992319087" },

  // { name: "MARIA DE LOURDES OLIVEIRA", number: "5561992062128" },
  // { name: "LOURIVAL AMARAL NUNES NETO", number: "5598985948008" },
  // { name: "EYSHILA ALVES DE MOURA", number: "5561996180484" },

  // { name: "ERLANDIA DA SILVA NASCIMENTO", number: "5561995913273" },
  // { name: "OSMAR FRANCISCO COSTA", number: "5561993263223" },
  // { name: "ROSIMEIRE ARAUJO PINTO", number: "5561994528427" },

  // { name: "FRANCISCA FRANCILENE BERNARDINO DA CRUZ", number: "5561983335526" },
  // { name: "KILUFIA SUMI MARIE AUGUSTINE", number: "5561981817944" },
  // { name: "MARIA DO CARMO DE AZEVEDO CARVALHO", number: "5561995744723" },
  // { name: "ADREANA LOPES OLIVEIRA DA SILVA", number: "5561985663123" },
  // { name: "CRISTIANO CARVALHO DA SILVA", number: "5561985663123" },
  // { name: "ANA MARIA FONTENELE CARVALHO", number: "5561991921019" },
  // { name: "EUDETE SOUZA MENDONCA", number: "5561991331268" },
  // { name: "DEISE CORREIA MAIA LEMOS", number: "5561984812149" },
  // { name: "FRANCIMAR ALVES DOS REIS", number: "5561995137910" },
  // { name: "ROGERIO ALVES DE ALMEIDA", number: "5561996710343" },
  // { name: "SANDRA HELENA GONCALVES", number: "5561983480082" },

  // { name: "ALTAMIR DE SOUSA AMARAL", number: "5561999624301" },
  // { name: "KEILA APARECIDA SILVA", number: "5538999389986" },
  // { name: "ARALICE BERTUNES DA MATA COSTA", number: "5561991610887" },
  // { name: "MILENE JUNIA BARBOSA MENDES NASCIMENTO", number: "5595991141994" },

  // { name: "SONIA MARIA DE PAULA", number: "5561983005869" },
  // { name: "EDUI FERREIRA DIAS VASCONCELOS", number: "5561983776362" },
  // { name: "RUTE PERCILIA ROCHA DOS ANJOS", number: "5561992764896" },
  // { name: "EVA LUCIA RIBEIRO BAIA", number: "5561999273937" },
  // { name: "JAQUELINE FREITAS GOMES", number: "5561999539986" },
  // { name: "CRISTIANO CARVALHO DA SILVA", number: "5561985663123" },
  // { name: "EUDETE SOUZA MENDONÇA", number: "5561991331268" },
  // { name: "GUILHERME DA COSTA RODRIGUES", number: "5561983708366" },
  // { name: "AGINALDO SOARES DE ANDRADE", number: "5561985474792" },
  // { name: "ANDREIA MEDEIROS VERDE LIMA", number: "5561996147874" },
  // { name: "IRACI DE OLIVEIRA ASSIS", number: "5561999826221" },
  // { name: "FRANCISCA FRANCILENE BERNARDINO DA CRUZ", number: "5561983335526" },
  // { name: "MARIA DO CARMO DE AZEVEDO CARVALHO", number: "5561995744723" },
  // { name: "LUCAS LAURO DO NASCIMENTO", number: "5561999871079" },

  // { name: "KILUFIA SUMI MARIE AUGUSTINE", number: "5561981817944" },
  // { name: "LAILAMYR VASQUES ALMEIDA AGUIAR", number: "5561994051134" },

  // { name: "JEOVALDO ROSA DE SOUZA", number: "5561996709406" },
  // { name: "benedito cesar de menezes", number: "5561998228365" },
  // { name: "maria de jesus meiras", number: "5561981716749" },
  // { name: "antonio almeida alves", number: "55619841235560" },
  // { name: "maria do socorro alves melo dos santos", number: "5561995977128" },
  // { name: "maria de fatima pires", number: "5561995248511" },

  // { name: "livia de souza lima", number: "5561986011362" },

  // { name: "jose alberto nogueira gomes", number: "5561984355439" },
  // { name: "magdiel batista ribeiro", number: "5561984288952" },
  // { name: "marinaldo pereira guedes", number: "5561999782870" },
  // { name: "ivanusia alves de oliveira guedes", number: "5561998217410" },
  // { name: "helio de araujo freitas", number: "5561999590078" },
  // { name: "maria gilda machado", number: "5561991495920" },
  // { name: "cristiane alves de oliveira", number: "5561996229801" },

  // { name: "edward pedro peressin filho", number: "556135221717" },
  // { name: "andre de sa miranda pontes", number: "5561996247075" },
  // { name: "juscelino de lucena peronico", number: "5561986622247" },
  // { name: "helen do brasil moreira", number: "5561981449618" },

  // { name: "francisca prudencia de mesquita", number: "5561991692350" },
  // { name: "diego de oliveira guedes", number: "5561993228832" },
  // { name: "wanderley prudencio de mesquita", number: "5561991692350" },
  // { name: "jurandir de souza martins", number: "5561982871462" },
  // { name: "raul mourao de abreu chagas", number: "5561992428094" },
  // { name: "maria da conceicao coalho", number: "5561984747997" },

  { name: "EDMILSON LOPES DE LIMA", number: "5561986077430" },
  { name: "MARIA DAS GRACAS BARBOSA", number: "5561981076817" },
  { name: "MARIA INES DO NASCIMENTO SILVA", number: "5561991426372" },
  { name: "ANALIA GLORIA DOS SANTOS NETA", number: "5561984080223" },
  { name: "JOSE ANTONIO TIMO", number: "5561981938136" },
  { name: "JULIANA DE OLIVEIRA BANDEIRA", number: "5561982386059" },
  { name: "MARINALVA PEREIRA LIMA", number: "5561991982612" },
  { name: "MARIA INEZ SOARES PRATES", number: "5561981356132" },
  { name: "NEIDE APARECIDA RODRIGUES DA SILA", number: "5561995109414" },
  { name: "JARILZA CAVALCANTE RIBEIRO", number: "5561992688475" },
  { name: "JEREMIAS CAPUCHO", number: "5561982071101" },
  { name: "COSME SILVEIRA DE CASTRO", number: "5561974021805" },
  { name: "HUMBERTO DE ALENCAR CAVALCANTE", number: "5561993077968" },
  { name: "EDILENE APARECIDA LISBOA DO NASCIMENTO", number: "5561996276503" },
  { name: "MARIZE CRISTINA DE OLIVEIRA RIBEIRO", number: "5561984260301" },
  { name: "JOCELENE BRAGA RODRIGUES", number: "5561991015204" },
  { name: "JANDELUCIA MARIA DOS SANTOS TOLEDO", number: "5561999075375" },
  { name: "LEILAMYR VASQUES ALMEIDA AGUIAR", number: "5561994051134" },
  { name: "GILDASIO DA COSTA SILVA", number: "5561998852931" },
  { name: "simone correa menezes", number: "5561995161659" },
  { name: "daniel carneiro caetano prates", number: "5561981055980" },
  { name: "SILVANIA FERREIRA DE SOUZA", number: "5561993939751" },
  { name: "JOAO GONCALVES NETO", number: "5561998103717" },
  { name: "efigenia de souza", number: "5561994575696" },
  { name: "ILDILENE SILVA ALMEIDA ALVES", number: "5561984123985" },
  { name: "CARLOS HENRIQUE DOS SANTOS", number: "5561994089304" },
  { name: "SELMA DA SILVA MAIA", number: "5561984296742" },
  { name: "OSVALDO SOARES DE ANDRADE", number: "5561999040295" },
  { name: "SANDRA MARCIA DE OLIVEIRA", number: "5561996062584" },
  { name: "ROBERTO DE ALMEIDA ROCHA", number: "5561986096863" },
  { name: "RAIMUNDO PINTO LAVRADOR", number: "5561996229724" },
  { name: "ANTONIA CELMA DE SOUSA OLIVEIRA", number: "5561998402238" },
  { name: "lucyane pereira de oliveira costa", number: "5561991779685" },
  { name: "VITORIA BARBOSA VIEGAS", number: "5561981166501" },
  { name: "LUCIANA LIMA DE ASSIS", number: "5561999369007" },
  { name: "SEVERINO DE VASCONCELOS ANDRADE", number: "5561993774476" },
  { name: "LORENA ALVES DE OLIVEIRA SOUZA", number: "5561991986228" },
  { name: "GEAN CARLOS MENDES NEVES", number: "5561991671745" },
  { name: "FRANCISCA LOPES COUTINHO SANTOS", number: "5561992423022" },
  { name: "JOSIAS RODRIGUES DA ROCHA", number: "5561984707190" },
  { name: "CERES DA CRUZ PINTO", number: "5561984495760" },
  { name: "SILVANA PEREIRA BADU", number: "5561996018134" },
  { name: "NYLZE DOS SANTOS SILVEIRA", number: "5561983310418" },
  { name: "MARIA DAS GRAÇAS PEREIRA HOLZ", number: "5561998111380" },
  { name: "MOISES SANTANA DOS SANTOS DE JESUS", number: "5561992354009" },
  { name: "MARIA DAS GRAÇAS VIANA PEREIRA", number: "5561984134428" },
  { name: "HIVONE ALVES RIBEIRO", number: "5561998410304" },
  { name: "MARIA NAVEGANTE DE AMORIM OLIVEIRA", number: "5561983162701" },
  { name: "ELOISA MARIA NUNES ROCHA", number: "5561986664261" },
  { name: "CARLOS ANTONIO SOARES DE SOUSA", number: "5561993451234" },
  { name: "JANIO GOMES DA SILVA", number: "5561992041457" },
  { name: "FRANCIMAR DA CONCEIÇÃO SILVA SANTOS", number: "5561992635109" },
  { name: "ROBERTO OLIVEIRA DA SILVA", number: "5561981089555" },
  { name: "MACIANA ALVES DE LIMA", number: "5561982718210" },
  { name: "JANILTON DA COSTA OLIVEIRA", number: "5561998410295" },
  { name: "EDILCIO JOSE CROSARA", number: "5561995237070" },
  { name: "ANDREIA MEDEIROS VERDE LIMA", number: "5561996147874" },
  { name: "CLEIDE MARIA DA SILVA FERNANDES", number: "5561994273171" },
  { name: "ERONICE RODRIGUES DA SILVA PEREIRA", number: "5561982689860" },
  { name: "MARIA EUNICE CARVALHO", number: "5561999010403" },
  {
    name: "WELMA MARGARIDA CARDOSO DOS SANTOS PASSOS",
    number: "5561982239775",
  },
  { name: "ANDRE FERNANDES GONÇALVES", number: "5561991544706" },
  { name: "RENATA DE CASSIA FERREIRA", number: "5561982828929" },
  { name: "FRANCILENE DE OLIVEIRA SILVA", number: "5561985034462" },
  { name: "SORAIA MACIEL VASCONCELOS", number: "5561984740297" },
  { name: "LIGIA DOS SANTOS REZENDE", number: "5561985283281" },
  { name: "CARLOS JOSE OLIVEIRA DOS SANTOS", number: "5561996685106" },
  { name: "GILSON RIBEIRO DO NASCIMENTO", number: "5561996936262" },
  { name: "FRANCISCA DAMASCENA DUTRA", number: "5561996217856" },
  { name: "FRANCISCO APARECIDA BALBINO DA COSTA", number: "5561995642933" },
  { name: "VANUCIA MARIA DE SOUSA", number: "5561984200210" },
  { name: "MANOEL MESSIAS MACEDO RODRIGUES", number: "5561981863068" },
  { name: "FRANCISCO FELIX DE ARAUJO", number: "5561991888632" },
  { name: "SUELY MEDEIROS VERDE", number: "5561981187973" },
  { name: "JUREMA DA CONCEIÇÃO SANTANA", number: "5561995733228" },
  { name: "LUCILENE MARTINS DOS SANTOS", number: "5561981812238" },
  { name: "MILENA JUNIA BARBOSA MENDES NASCIMENTO", number: "5561991141994" },
  { name: "HYGOR SANTANA MARQUES", number: "5561998412716" },
  { name: "CRISTIANE SOUZA SANTOS", number: "5561996078777" },
  { name: "MICHEL BATISTA DA SILVA", number: "5561998784874" },
  { name: "EDINEIDE RIBEIRO MALAQUIAS GALENO", number: "5561985309573" },
  { name: "ADRIANA CRISITNA MARTINS", number: "5561995969134" },
  { name: "IVONEIDE DE SOUSA PEREIRA", number: "5561991979259" },
  { name: "ADYSON COSTA AIRES", number: "5561999866647" },

  { name: "", number: "" },
  { name: "", number: "" },
  { name: "", number: "" },
  { name: "", number: "" },
];

const message = (name: string) => {
  return `Boa tarde, ${name}! Sou a *Gabrielle* da _CEMIC_.

Estou entrando em contato, pois o exame que o senhor(a) fez para concorrer a vaga de tratamento com implantes dentário chegou e o(a) senhor(a) foi selecionado(a).

Sua avaliação com o especialista vai ser amanhã à partir das 17:00 horas no Conjunto Nacional. Os atendimentos são por ordem de chegada.

Pedimos que venha preparado(a) financeiramente, pois caso o(a) senhor(a) decida que vai ficar com a vaga deverá ser realizado o pagamento. Após o pagamento são 15 dias para chegar o material e seu tratamento será realizado.

📅 Data: 28 de Agosto de 2025
📍 Local: Conjunto Nacional - Torre Amarela - 5° andar - sala 5092

*CASO JÁ ESTEJA EM TRATAMENTO NA CEMIC, DESCONSIDERAR ESTA MENSAGEM!*

_*Agradecemos sua atenção!*_

https://www.ongcemic.org
`;
};

create({
  session: "Robo em Massa",
  logQR: true,
  debug: true,
  forceConnectTime: 500,
  browserArgs: ["--no-sandbox", "--disable-setuid-sandbox"],
  headless: "new", // Usar o novo modo headless
})
  .then((client) => start(client))
  .catch((error) => console.log(error));

async function start(client: Whatsapp) {
  for (const contact of numbers) {
    try {
      const chatId = `${contact.number}@c.us`; // Número do destinatário no formato internacional com '@c.us' no final
      const msg = message(contact.name);

      await client.sendText(chatId, msg);
      console.log(`Mensagem enviada para o paciente: ${contact.name}`);
    } catch (error) {
      console.log(`Falha ao enviar mensagem para o paciente ${contact.name}:`);
    }
    await delay(30000);
  }
}
