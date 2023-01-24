import React from "react";
import { useRouter } from "next/router";

function SinglePost() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id, 'id')
  const imgURL =
    "https://www.freecodecamp.org/news/content/images/size/w2000/2023/01/cover-template--10-.png";

  const profilePic =
    "https://www.freecodecamp.org/news/content/images/size/w60/2022/06/1654890413623.jpg";

  return (
    <div className="!mt-20 mb-10 w-11/12 lg:w-3/4 mx-auto">
      {/* date and tag */}
      <p className="text-sm text-gray-600 font-semibold">
        JANUARY 20, 2023 / {/* category */}
        <a className="hover:underline inline-block cursor-pointer text-blue-800">
          #JavaScript
        </a>
      </p>
      {/* title */}
      <h1 className="mb-3 text-3xl md:text-5xl font-semibold capitalize">
        How to Submit a Form with JavaScript – JS Submit Button Example
      </h1>
      {/* author */}
      <div className="flex items-center">
        <img src={profilePic} className="w-14 h-14" />
        <p className="mx-3 cursor-pointer text-lg font-semibold">Joel Sab</p>
      </div>
      {/* Featured Image */}
      <img src={imgURL} alt="img" className="cursor-pointer w-full object-cover my-5 h-auto max-h-[50rem] rounded-sm" />
      {/* content */}
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur nesciunt molestias enim sapiente facilis doloremque sunt tenetur fugiat omnis assumenda deleniti quas adipisci modi veniam laborum ab fugit ducimus itaque vitae repudiandae cumque, suscipit necessitatibus. Distinctio voluptatem repellat nam magni quisquam sapiente autem voluptas, porro consectetur expedita, recusandae fuga quas eveniet sit suscipit quod ducimus tempora architecto vitae. Praesentium incidunt, dolorem voluptatem qui reiciendis recusandae. Soluta, maxime aspernatur perferendis quo laborum amet, nobis ex debitis, magnam tempora temporibus! Aliquid quibusdam aliquam provident, aut et aspernatur consequatur, ducimus ullam quam illum consectetur earum. Suscipit sit pariatur ducimus rem hic ea, sint cumque facere. Dolor modi reprehenderit itaque iste possimus, nam blanditiis vero adipisci fuga earum officiis dolore quaerat voluptas laudantium sunt unde. Quasi veniam consectetur saepe non, reprehenderit fuga excepturi in error accusamus eius maxime officia quos ratione aperiam tempore molestiae temporibus soluta! Explicabo laudantium libero minus corrupti, dolore quidem distinctio, tempora ad officia delectus sequi quam aspernatur iusto optio? Numquam quis doloremque reiciendis eos accusamus quasi! Nihil qui corporis animi ducimus soluta expedita id cum? Illum laudantium dicta molestiae quasi deserunt suscipit facilis quo, delectus expedita harum quisquam porro facere fugit? Debitis, sequi nostrum, et ipsum ab exercitationem magni pariatur sapiente odio deleniti id illo dolor totam dolores sed fuga? Neque, sequi corrupti magni temporibus autem reprehenderit iusto sint maiores aperiam tempore laborum accusamus sapiente corporis nam amet cupiditate omnis quo commodi odit placeat! Quod doloribus enim veniam exercitationem beatae repudiandae aut excepturi. Quis libero, omnis sequi eligendi tempore voluptatem odio voluptas a inventore, nostrum, numquam quaerat qui quia cum? Corporis nesciunt blanditiis doloribus illum voluptatibus minima soluta incidunt laborum, porro cumque, repellat recusandae, delectus eos molestias possimus. Eos itaque eaque ratione repellendus nihil tenetur asperiores ipsam sint iure dignissimos magni, maiores voluptas earum sequi veniam fugiat officia beatae nisi! Iste eaque, aspernatur, laboriosam magnam eius pariatur fugit nisi quod ad animi nemo id quae, error sit totam consequuntur at incidunt rerum alias repellat aliquid placeat cumque? Nihil perferendis laboriosam in corrupti itaque iusto, incidunt sed atque repellendus tempora consectetur minima ut recusandae unde ad facere. Perspiciatis quibusdam illo suscipit quisquam placeat consequuntur aut dolorem architecto, necessitatibus deserunt vel? Ad quae non rerum repudiandae sequi soluta magnam quam cumque itaque quod. Dolore et mollitia rerum? Harum est commodi eum voluptatum necessitatibus eos itaque quisquam odit at, adipisci accusantium omnis laboriosam, expedita culpa laborum nemo nobis assumenda excepturi quasi quos aperiam facilis. Atque at natus possimus quidem laudantium unde laboriosam officia saepe quos quasi beatae libero ullam consectetur ducimus dolore eius praesentium hic quo, molestiae ad quam accusamus consequatur doloremque. Deserunt quasi adipisci nemo illum corporis molestias officiis magnam aperiam totam inventore, harum aut labore, a maxime. Blanditiis, ad nesciunt voluptas maiores voluptatum sit repellendus asperiores obcaecati aliquam eaque eos ab cum. Minima laborum asperiores eum debitis tempore neque beatae magnam necessitatibus. Optio aliquid harum tenetur iure sequi explicabo vitae et, reiciendis iste quia vel quas tempore esse neque ea possimus sint assumenda laudantium voluptatibus praesentium, quis animi impedit repellat ipsam! Nisi obcaecati dolorem aperiam optio, illum eligendi error neque delectus repudiandae facere, deleniti quasi debitis, quas sint. Voluptates fuga maxime enim animi saepe fugiat sunt, similique porro modi mollitia, necessitatibus est repudiandae, eaque delectus in voluptatem rem ipsam obcaecati! Dolorum consectetur vel facere dolor quisquam praesentium pariatur debitis. Omnis quas numquam ea nostrum distinctio minima eius, ullam quasi. Ut earum id numquam incidunt laudantium vero aliquid deserunt sint blanditiis enim, adipisci perferendis delectus facilis dolorem similique quis nisi a ad debitis! Quasi, odit illo! Dicta nisi deserunt a, eos perferendis eaque sapiente. Ipsam molestiae voluptatum voluptates culpa sunt. Laboriosam fuga, delectus voluptas quia laudantium, repellendus praesentium ipsum id nesciunt veniam inventore, adipisci quae aperiam aspernatur libero nostrum temporibus sed excepturi consequatur minima officiis! Debitis quod accusamus nihil voluptates enim dolore porro quas fuga, autem molestiae quaerat quia nulla quasi esse. Optio voluptas facilis eveniet alias atque deserunt iste perspiciatis debitis ipsa, itaque at modi maxime nemo dolore veniam doloribus et architecto repudiandae blanditiis adipisci nihil saepe velit! Magni maiores ullam deleniti voluptatem ducimus animi non quo sequi, placeat reprehenderit aperiam nulla, dolorum voluptatum tempore ut nemo beatae, temporibus quod tempora! Accusamus odit qui natus praesentium deleniti totam veniam, repellendus iste hic vero tempore dignissimos cupiditate! Veritatis, tempore pariatur qui repudiandae odio tempora similique perferendis consectetur veniam expedita quo eum. Iure nisi quisquam fugit corporis sed dolores labore provident cupiditate magnam amet illo molestiae mollitia error quae assumenda quo illum ipsum molestias, quia aliquid modi? Magni explicabo, vitae eligendi error similique iusto quidem consequuntur quibusdam est unde voluptatem eius dicta impedit sint! Recusandae eos repudiandae enim amet repellendus excepturi et laudantium fugit ex dolore dicta assumenda autem velit, saepe ipsam est mollitia aliquid. Dicta esse, qui atque, magni ducimus totam beatae repellendus velit dolorum praesentium exercitationem. Delectus culpa facilis itaque ipsum accusantium id maiores voluptatibus voluptatum. Voluptates nihil nam possimus dignissimos earum eos iste nostrum in obcaecati distinctio! Id labore blanditiis possimus suscipit odit amet, rerum recusandae libero debitis sed doloribus et vel, beatae officia itaque facere vero nostrum consequuntur. Sed minus fuga quasi esse numquam, in quia porro nesciunt quibusdam totam, placeat hic praesentium maxime sint, voluptas at culpa animi architecto libero sequi magni aperiam. Amet distinctio ullam porro, voluptates, illo suscipit nisi ducimus, aperiam inventore iure facilis animi error culpa fugiat totam temporibus quis necessitatibus! Quam placeat, dolorem, consequuntur facere optio ut accusantium odit necessitatibus quaerat provident, fugit aspernatur illum ratione quasi nisi maiores sequi perferendis saepe tenetur ab distinctio. Quas maxime perferendis ratione sequi vero fugiat. Vitae repellat ullam ratione hic ea explicabo vero beatae eum, ad sint, voluptas iure perferendis temporibus, quos atque nostrum vel voluptate asperiores porro tempora minima debitis deleniti! Quia, est saepe maiores pariatur delectus harum necessitatibus. Laborum provident dicta aliquam doloribus nobis, velit eligendi eos aut molestiae excepturi distinctio odio, aliquid illum cumque omnis fugit praesentium placeat labore, id explicabo doloremque quidem debitis? Fuga velit repudiandae modi mollitia tempora a error, laboriosam omnis animi fugiat eius dicta quibusdam quo temporibus. Minus itaque libero voluptas iure labore. Consectetur modi amet nostrum, quis ducimus temporibus quisquam quae deleniti illo. Reprehenderit voluptatibus expedita molestiae unde error labore cupiditate assumenda porro? Eos qui hic labore rem aliquam aspernatur adipisci cumque quaerat, deleniti, pariatur aut. Quaerat, quasi! Iusto qui doloribus, neque eligendi molestias repellat temporibus ad quidem, maxime similique sapiente in dolor, excepturi ipsum saepe necessitatibus culpa reiciendis iste impedit? Similique unde quam voluptate maiores expedita non eaque impedit nostrum repellat, eos eligendi soluta suscipit amet! Quidem enim dignissimos accusantium magnam itaque fuga consectetur, suscipit autem doloribus laudantium repudiandae cupiditate tempore, ipsa qui tenetur velit praesentium sint ipsum, omnis adipisci sapiente consequatur assumenda explicabo odio? Nihil facilis minima consequatur quod eius harum laudantium cumque enim, numquam eligendi magnam deserunt officiis eos in nulla sequi debitis architecto adipisci autem ab, quia ipsam accusamus vitae amet. Ipsam reiciendis quisquam, corrupti soluta doloremque voluptas incidunt numquam quam earum, voluptate architecto praesentium ad aut, ratione tenetur vel non ex aspernatur sint dolores quos. Reiciendis nam, sed sit quidem tempore nobis, molestiae fugiat beatae sequi illo, excepturi ipsum impedit id temporibus? Voluptate qui natus consequatur voluptatum ducimus consectetur itaque sunt, veniam adipisci nobis obcaecati commodi, magni molestiae dicta eveniet facilis, deleniti id velit? Beatae laudantium omnis, quasi, assumenda aut ex tempora neque dicta magnam quibusdam eveniet provident, doloribus voluptates reiciendis dolore! Quibusdam doloribus error excepturi. Praesentium, autem numquam eos enim reiciendis ratione at natus vitae deleniti doloribus debitis corrupti tempore molestiae fuga aperiam quidem facilis modi maiores hic ea dolorum laboriosam sunt! Repellendus labore aliquam mollitia eaque aspernatur repellat unde sapiente quod ut fugiat fugit, impedit alias ad asperiores. Aspernatur sit culpa dolore eum perferendis, repellendus fugit odio explicabo nam esse, deleniti est ipsam odit possimus placeat voluptatibus. Modi excepturi itaque ipsam beatae cum minima dolorem eaque. Reprehenderit amet perferendis doloremque nihil deleniti, similique debitis cum minima dignissimos ratione corporis quo molestias recusandae repellendus, voluptate facere? Quae repudiandae a qui pariatur numquam, quibusdam voluptatibus commodi error, ipsa non natus placeat impedit nihil eveniet, vel unde atque neque sequi facilis distinctio delectus nobis ducimus. Eligendi expedita odit veniam! Voluptatem quaerat sint cum corporis architecto, impedit ex dolorem, inventore quam non necessitatibus. Dolore ad, molestiae magni, sequi nisi laudantium, culpa harum quidem iste nihil commodi reiciendis vel delectus suscipit perspiciatis corporis mollitia voluptas necessitatibus tenetur iure neque doloremque aliquam officia voluptate! Quod beatae magnam iste labore ex nemo quas maxime quidem mollitia. Ipsa unde illum quaerat dicta est omnis non doloremque dolorum vitae voluptatum alias et repellendus ipsam voluptates sapiente pariatur, veritatis tempora necessitatibus quisquam, a ullam? Deleniti laborum doloribus alias necessitatibus exercitationem provident suscipit, omnis voluptatibus ullam ipsam eum consectetur distinctio vero aliquid asperiores, rem iure vitae molestiae fuga. Illum, atque deserunt, quo accusamus modi, quos quasi inventore doloremque voluptatibus ducimus dolorum soluta officiis illo. Repellat, ratione? Tenetur amet officia ratione sed accusantium sequi, corrupti odit dignissimos aperiam rem. Aliquid nostrum minus, reprehenderit accusantium amet a excepturi sequi, ipsam quibusdam totam, temporibus incidunt fugiat praesentium alias. Ab quia nesciunt deleniti autem nostrum vitae iure vel laudantium, odit recusandae maxime soluta amet adipisci dicta doloribus aperiam sunt corrupti corporis consequuntur vero? Odit placeat, voluptas a totam vitae neque ex id? Numquam, reprehenderit totam facilis error enim tenetur provident quasi fuga minima sit consequatur ipsa doloribus reiciendis culpa blanditiis expedita suscipit pariatur exercitationem, excepturi nemo debitis soluta veritatis! Sint rem sapiente illo cum porro culpa dicta dolor, laborum mollitia nam omnis eveniet nulla optio maiores numquam quae ad facilis dignissimos, explicabo deserunt. Deleniti, repellat consequuntur? Molestias autem, fugiat error sapiente, amet fugit illo quaerat similique atque quisquam libero dolores excepturi numquam ratione rerum beatae fuga ab laborum est recusandae accusamus saepe dolor neque exercitationem! Ipsum eveniet quas mollitia. Autem ab itaque asperiores impedit reiciendis inventore quisquam. Et perferendis error cum a itaque ea id? Saepe voluptatum culpa officiis ea sed maxime eius perspiciatis, at distinctio doloribus molestias ex accusantium quod iste illo ipsa facilis vel veniam nulla reprehenderit. Dolorem numquam velit id odit possimus repudiandae, aspernatur earum reiciendis quia quae placeat magnam consectetur pariatur esse expedita obcaecati quasi vitae eius rem, commodi repellendus nulla aliquam doloremque dolores? Voluptatibus optio quia, excepturi ullam facere repudiandae nihil et consectetur reprehenderit possimus alias, adipisci consequatur. Reprehenderit voluptas dicta dignissimos voluptatem magni nobis repudiandae. Nulla quasi nemo, debitis quis temporibus numquam voluptatum maxime molestiae reprehenderit? Optio laborum in architecto nihil magnam nulla ipsam quo ipsum voluptatum tempora doloribus, ea quasi perspiciatis earum dicta natus officia aut beatae sit quidem delectus! Molestiae delectus numquam eligendi inventore cumque ab consequuntur id sed dolorem temporibus molestias labore harum reiciendis itaque corrupti officia nulla voluptatem impedit minima aperiam quod, velit mollitia iure repellat? Nisi repellendus vel vitae, exercitationem deleniti praesentium repellat distinctio velit voluptas, deserunt tempora iste nemo quae eos libero mollitia porro placeat, perferendis dolor delectus. Mollitia placeat porro nemo consectetur odio deleniti sint, animi sunt illum molestias ducimus tempore. Odit vel animi officiis nobis molestiae sit aspernatur perspiciatis. Voluptatem iure autem commodi, dolorum delectus laudantium illo voluptas porro voluptate maiores ipsum animi est officiis laborum at facere beatae dolore voluptatibus quis deserunt, possimus ea ratione quo! Iusto voluptatum quos eum? Omnis facere ipsa sapiente at exercitationem nostrum corporis facilis deserunt sed numquam atque dicta porro laudantium doloremque, ad cum dignissimos laboriosam reiciendis. Unde, cumque. Reiciendis perspiciatis voluptatum quasi? Illum dolore, natus recusandae veniam, voluptatum vitae ipsa ducimus modi soluta ea nulla impedit fugit eaque praesentium itaque quo iusto quis fugiat. Id porro laudantium, assumenda sit pariatur, ea sequi saepe quae nam dolor ratione enim? Sequi, consectetur quod harum delectus officiis numquam, quo ipsa officia sapiente illum quaerat velit, quia accusantium vero minima recusandae ea aut quidem. Deserunt dolorem ipsa cum. Cumque eos voluptates ullam voluptatibus! Sed accusantium eaque nemo aliquid magni deserunt asperiores numquam sapiente similique dignissimos, id enim voluptas inventore magnam incidunt totam repellat quisquam aspernatur. Cumque, fugiat dignissimos similique iste enim atque reprehenderit a ipsa voluptatum tenetur sequi sit praesentium non! Id facere voluptatum incidunt inventore reiciendis, earum doloribus fuga commodi dolores aperiam ducimus odio possimus eos sint nulla praesentium expedita hic cupiditate! Magni odio expedita iure assumenda, ex temporibus suscipit minus velit deserunt reprehenderit laborum est aut animi! Impedit nam fugit ut. Odio molestiae ratione laborum rerum sit eaque, nihil repellat inventore optio quasi quidem repudiandae dolorem, architecto sunt fugit suscipit cumque, dicta et minus eum esse vel. Debitis voluptatem ipsum officia? Explicabo distinctio soluta fuga neque porro accusantium accusamus iure nobis consectetur quam dolorum ab quis optio nam ipsa animi facilis consequuntur, ex aspernatur esse! Perferendis iusto ipsa fugit nostrum dolores aliquid perspiciatis reiciendis quas laborum sunt. Laboriosam harum vel ducimus voluptatibus voluptatem ut hic facilis odio, nesciunt ratione pariatur, provident sequi nihil optio minima reiciendis, ipsum voluptatum at commodi? Pariatur deleniti harum soluta necessitatibus, eligendi facilis quod cumque obcaecati, quia eos voluptatem quam fuga voluptatibus est exercitationem. Necessitatibus minima quam exercitationem fugiat debitis hic corporis culpa nostrum commodi facere. Error sit nisi minima nobis? Modi optio maiores esse expedita iusto sit, quas dolore, cum iste a totam minima eaque delectus voluptatem! Magni repellat ea nesciunt fuga saepe? Aspernatur voluptatem qui non obcaecati quas, fugit et labore. Ad distinctio totam, aperiam ipsum vero voluptatum illo molestias porro quos rerum sapiente ex blanditiis pariatur. Consequuntur maxime, reprehenderit eius cumque debitis aperiam ut quibusdam, cupiditate consectetur ab necessitatibus blanditiis similique, temporibus perferendis alias ipsa? Vel error ex voluptatum est nobis optio nihil nam, adipisci impedit rem possimus aspernatur aliquid debitis eum. Minus voluptates tempore dolore vitae fugiat? Natus aperiam deserunt unde necessitatibus dolores dolore omnis assumenda odio dicta veritatis praesentium labore rerum harum quas ea excepturi, officia veniam neque dignissimos corporis exercitationem. Porro voluptate dignissimos odio, ab expedita nobis tenetur nesciunt, dolores iure perspiciatis, nisi temporibus? Nobis illo magnam id molestias, veritatis velit vero dolorum voluptatum ipsam quibusdam facere unde earum eaque voluptate quo dicta aliquid cum error, ut officia. Voluptate labore qui natus quidem. Magnam, voluptatum, tempore inventore velit est et temporibus, commodi doloremque eum odit voluptates! Labore maxime iusto earum incidunt distinctio atque in voluptatum nesciunt perferendis beatae? Dolorem accusamus inventore minima praesentium. Accusantium tenetur quis atque facilis corrupti distinctio dignissimos iste odio inventore velit a, nemo tempore similique architecto amet. Rerum voluptates totam hic iste eius, quae vel id cupiditate, corporis, incidunt quidem assumenda atque suscipit minima quis quod beatae! Dolor, sequi nostrum? Tempora dolores maxime, sapiente harum voluptas aspernatur ipsa neque laborum molestiae omnis nulla. Officia, quae? Assumenda quis ipsa inventore officiis ut quia velit? Saepe rerum earum repudiandae. Nesciunt corrupti saepe voluptates cum, eligendi rerum temporibus perferendis expedita velit fugiat a modi. Assumenda eaque reiciendis maiores qui ducimus, doloribus id laboriosam architecto pariatur, quas voluptate. Labore asperiores eaque eos, error deleniti atque alias eligendi, non, quisquam commodi temporibus omnis obcaecati at ad! Inventore repellat quod rerum provident saepe neque molestias corporis. Minus dicta dolore quia doloribus, nulla reiciendis saepe cumque veniam fuga sunt magnam dignissimos qui iste labore, tempore iusto non quis provident distinctio eligendi eos neque, adipisci quisquam! Saepe rem cupiditate, numquam ducimus laborum sequi ut, accusantium quaerat magnam laboriosam voluptatem. Fugiat delectus tenetur doloribus dolorem optio hic incidunt? Quaerat, ab. Maxime praesentium pariatur minima omnis, magni commodi ducimus odio temporibus consequatur hic voluptates inventore, dolore veniam. Saepe quas, magni eveniet ipsam id aliquid eum itaque minima iure ut dicta ex necessitatibus consequuntur velit deserunt obcaecati, nulla ducimus? Ratione aut in sed odio quaerat ex omnis, facilis adipisci obcaecati excepturi et debitis, illum ipsum delectus dolorum natus. Illum, soluta pariatur? Ex in libero sit odio, blanditiis pariatur omnis fuga odit, maiores vero quis nostrum earum recusandae rerum, nemo natus necessitatibus ipsa dolor enim soluta explicabo adipisci? Itaque ratione, atque quos velit dolore, laboriosam est sint recusandae cupiditate minima quo soluta nisi. Vero odio eos quis. Voluptatum, ex cumque? Provident possimus, autem, perferendis facilis eligendi hic neque repellendus a maxime asperiores quibusdam aperiam molestias praesentium nemo debitis pariatur. Sint voluptatibus magni molestiae reprehenderit praesentium amet magnam eos, velit doloribus ad vel expedita odio veritatis incidunt cupiditate tempore laborum dicta iste mollitia. Tempora error beatae facilis nobis vel quos eveniet maiores deserunt quidem laboriosam, soluta cumque, placeat saepe quam quo distinctio ea libero dolores numquam ullam hic dolore esse! Ad incidunt id dicta, soluta odio hic recusandae est temporibus harum at mollitia exercitationem quas possimus tenetur aspernatur rem pariatur nobis optio alias perspiciatis corrupti maiores. Facilis molestiae blanditiis repudiandae labore corrupti sed nemo, quis assumenda consectetur vitae dolorem culpa, unde quia. Ratione quod beatae debitis in doloribus modi, itaque suscipit nesciunt incidunt quos est quidem ut harum aspernatur ipsa eum veritatis mollitia nemo dolore aut temporibus, necessitatibus ducimus neque. Sed suscipit vel numquam sunt perspiciatis magni temporibus soluta quaerat consequatur et voluptate saepe odit fuga atque, alias dolore, ex, eaque quae nemo. Necessitatibus eveniet molestiae soluta sed ullam dolores, repudiandae enim qui dolorem voluptates corrupti, porro maiores magni corporis accusamus explicabo expedita, dicta maxime delectus ipsum rerum animi minus. Quibusdam laborum illum, pariatur atque quasi, suscipit architecto doloribus unde excepturi modi delectus iure rem aspernatur vero, eveniet corporis totam! Impedit unde nostrum voluptatum, laboriosam aliquid architecto quae enim harum, voluptatem accusamus ab aut provident explicabo doloribus! Et magni nihil voluptates modi voluptatem consequatur, veniam in dicta accusamus alias temporibus rerum natus rem illum quibusdam. Enim doloribus modi repudiandae quibusdam, ipsum quisquam facere velit praesentium a, doloremque eius laudantium. Explicabo officia ex provident doloribus sequi corrupti deleniti! Tempora, quisquam sed quia voluptates rem qui laboriosam totam harum minus deserunt illo asperiores. Maxime temporibus, ab, amet incidunt impedit id mollitia necessitatibus accusamus quae vel sapiente similique quas sunt quibusdam molestias! A animi quas numquam eligendi temporibus eos quibusdam quisquam quam earum, nihil fuga libero voluptatibus ratione, fugiat ipsum odit nesciunt nisi consectetur nam ducimus architecto accusantium. Impedit animi accusantium minus voluptas maxime sint unde, dolorum nisi ea excepturi vero ratione officia molestias culpa similique voluptatem rerum temporibus laborum perferendis officiis, tempore aliquam eum? Culpa molestiae dolores, odio dicta repudiandae modi reprehenderit delectus nihil nesciunt rerum cum incidunt consectetur qui sint, sed ipsum nobis laboriosam consequatur numquam inventore iure. Officia nobis id unde voluptatum odio, magni eligendi cum voluptas, quisquam ipsa veniam quia placeat vitae assumenda, aut nemo doloremque. Reiciendis a, odio impedit ratione libero dolor quidem laboriosam dolore ipsa iste sunt nesciunt maxime quam facilis eveniet sit quas architecto ab animi numquam ea id eum similique! Unde culpa aliquid ipsum eligendi, facilis totam aliquam illum velit magnam dignissimos illo, sequi quasi fuga dicta, sit officia. Veritatis, nemo. Placeat voluptatibus tenetur laborum eligendi vitae totam quam aut cum consequuntur fuga repellat exercitationem, repellendus voluptates itaque autem consequatur ex. Nemo explicabo accusamus ducimus quidem dolores, asperiores omnis corrupti assumenda. Excepturi quod quia perferendis magnam numquam vel incidunt, sed expedita fugiat est quos veritatis inventore ea magni repellendus quam et dolorum maiores harum. Nam sapiente nesciunt consectetur reprehenderit, aliquid soluta quas. Accusamus magni, itaque eligendi aliquid sint ipsa sed natus nihil voluptatibus laboriosam quia totam atque aut, animi molestias sequi temporibus quam rerum dolorem beatae nostrum adipisci dolore. Temporibus porro placeat officiis delectus, sed hic quia consequuntur laborum expedita perferendis omnis perspiciatis quibusdam! Qui repellendus quidem fugit ad illum porro dolor provident quas omnis? Tempora commodi culpa qui laudantium minima accusamus alias expedita esse ab. Soluta at tempora obcaecati, cumque illum nesciunt assumenda iste! Laudantium illo voluptate ab laborum aperiam fuga hic, eos ducimus, saepe commodi autem! Accusantium voluptate accusamus totam ipsa ab ipsum sed et dolorum repudiandae reiciendis ipsam est odio nemo, pariatur a fugiat. Corporis sint ad enim doloribus perspiciatis iusto quaerat sed aspernatur quam, nesciunt pariatur architecto aliquid earum, modi impedit, repellendus ipsam magni voluptatem assumenda consequatur animi. Ipsa facere quisquam temporibus veniam dignissimos in suscipit quidem, accusantium placeat delectus maxime minus animi assumenda eum, iste voluptas culpa quos veritatis excepturi voluptatibus commodi mollitia recusandae praesentium. Quas consequatur consequuntur doloremque sint minima deleniti enim expedita dicta perspiciatis praesentium modi eos quibusdam reprehenderit nesciunt repellat reiciendis voluptatibus repudiandae, nihil tempore voluptatem. Ipsum, esse recusandae. Ratione, harum quasi numquam incidunt, ut omnis officia repellat eaque voluptas facere saepe placeat quidem rerum id ullam porro sequi aspernatur temporibus at corrupti beatae autem mollitia! Laborum consequatur ipsam, veniam ratione ullam in ad delectus, ipsum, soluta quasi quod. Illum delectus suscipit nisi odio, rerum voluptate. Minima commodi labore eius possimus. Inventore, porro dolor odio nihil ducimus explicabo. Delectus nemo voluptatem optio corporis ea sapiente atque tempora nihil a, voluptate molestias id debitis? Odio deserunt eveniet nemo libero debitis, deleniti suscipit architecto nulla vitae commodi sequi, nostrum molestiae harum voluptatum nesciunt temporibus placeat tenetur sunt explicabo ex dolorum alias optio! Necessitatibus laudantium vel totam atque quibusdam nobis iste dicta doloremque magnam. Quia, vitae aut dolorum vero libero quo laudantium totam beatae voluptas ad maiores sapiente dolores molestiae animi cum esse autem id dolor! Iure quisquam vel sint vero maiores ratione dolore quod, tempore iste. Vitae dolorum minus adipisci quasi, voluptas ratione delectus iste nam sapiente nemo repellendus quis voluptate at laborum nostrum aliquid maxime eveniet ex omnis neque, odit id dolorem velit est? Neque quasi odit aspernatur consequuntur est sequi beatae eum optio vero quis, voluptatum dignissimos, hic adipisci voluptas, atque ducimus asperiores necessitatibus dolorem libero! Voluptatem assumenda eum cumque, incidunt aperiam rerum molestias dolores odit, non nemo eaque quam. Mollitia porro doloremque explicabo excepturi animi quae sed, a qui odit, accusamus maxime ad ipsa nam temporibus blanditiis. Ut aut voluptates numquam modi consequatur iusto sunt repudiandae esse nulla commodi suscipit beatae repellat dicta et officiis molestias porro amet ea tenetur nisi quibusdam voluptatum quam, soluta debitis. Exercitationem, autem repellendus? Autem fuga nihil, debitis enim voluptatem, voluptate accusantium tempora accusamus sint delectus suscipit quibusdam corrupti, facere natus tempore nesciunt officiis odit eos maiores? Ipsa doloribus dolorem fugiat accusamus vero officiis aliquam. Vitae error non, atque, quisquam quam eveniet consequuntur, iste quidem molestiae facilis necessitatibus sunt omnis! Labore dolores ducimus commodi porro ipsam, voluptatibus optio mollitia aliquid veniam expedita amet necessitatibus cupiditate modi minima ipsum fugit officia doloremque animi cumque hic a odit exercitationem sint autem! Minima explicabo itaque deserunt dolores nobis est laboriosam, praesentium ipsum quisquam aperiam consectetur esse reprehenderit, ducimus a in aut? Id maxime voluptas iste. Facere ducimus eius fugit esse nam rerum placeat error consequuntur, pariatur, et dolorum sunt assumenda? Distinctio fuga earum, animi placeat sapiente ex tempora aliquid, officia quo labore voluptatem eius! Dolor consequuntur quasi eaque, corporis aliquid quas obcaecati veritatis beatae dolorum deserunt nobis, blanditiis accusamus laboriosam dolorem consequatur magni laborum sed necessitatibus voluptatum explicabo consectetur! Pariatur tempora optio totam aut eum velit odit eligendi atque quod nobis debitis soluta obcaecati officiis nesciunt possimus ex qui vitae iste a, excepturi quo voluptates, omnis ratione doloremque? Itaque minus exercitationem quidem voluptatibus, eveniet labore nostrum iusto unde ex alias impedit maiores vero accusantium odit magnam natus quia incidunt delectus similique nisi voluptatem. At, quae adipisci. Consequatur dolorum, placeat id quo odio ratione facere dolore praesentium eum dolores ipsam facilis nisi sunt iure eos reiciendis quibusdam. Laudantium, nesciunt facilis cum autem minima quibusdam explicabo modi, dicta consequatur voluptas quos vitae officiis accusantium repudiandae molestiae culpa ex! Sit molestiae minus porro provident tempora fugit tempore eos. Quos ea magni, expedita numquam perspiciatis et quam officia sapiente aut adipisci ullam architecto sunt molestias iusto dignissimos eum. Blanditiis odio, facere quod dolor accusantium sequi fuga labore nostrum saepe! Autem dolor eligendi perspiciatis cupiditate eveniet cumque, mollitia voluptates labore necessitatibus reprehenderit assumenda vel beatae incidunt eius quaerat dignissimos, debitis, voluptate esse tempora harum accusantium blanditiis animi ullam in? Officiis totam maxime quisquam sint, quidem, impedit expedita voluptates rem iste quod esse iusto cum repellendus obcaecati at similique? Eligendi saepe aperiam quia blanditiis! Exercitationem maxime ex accusantium praesentium, vero iure! Dicta odit sequi possimus neque. Eos incidunt reiciendis perferendis voluptatum architecto hic exercitationem ipsum, laudantium eaque ea sunt quae. Quidem aperiam reprehenderit necessitatibus aliquid nemo sapiente tempore dolorem eligendi cupiditate, nesciunt dolores, reiciendis at deleniti placeat animi temporibus quas quo inventore deserunt minima dignissimos voluptatem a? Adipisci soluta doloribus nemo sit nostrum, temporibus ipsum laborum placeat, quaerat quas delectus nesciunt! Voluptates beatae officiis voluptatum ea ab voluptate architecto nulla dicta sit modi, minima iure, esse hic fugiat reprehenderit quas consequatur temporibus aperiam fuga similique recusandae accusamus eaque laboriosam sequi! Deserunt hic eaque molestiae fuga maxime? Mollitia aliquam obcaecati assumenda cum officiis eveniet, id expedita dolor reiciendis, totam accusantium. Dolorum rem, odit, dignissimos sapiente incidunt expedita veritatis molestiae aperiam ullam quidem officiis beatae enim quibusdam facilis quod praesentium deserunt eum iure? In alias ad natus hic incidunt placeat accusamus minima voluptatibus excepturi doloribus molestias et dolores, nemo perspiciatis pariatur labore eius expedita eos aut sit? Pariatur, illum vitae recusandae adipisci dicta id delectus laudantium commodi magnam, similique amet nobis eius qui architecto temporibus aspernatur repudiandae vero? Animi reprehenderit numquam atque vitae, dolore magni nulla excepturi expedita tempora iusto, esse maiores voluptatum debitis, exercitationem perferendis inventore vel eligendi id suscipit in sit? Dolores, veritatis ut dicta dolor perferendis pariatur aperiam officiis maiores, exercitationem delectus consectetur voluptatibus a optio animi quisquam earum et corporis itaque. Consequuntur eaque repellat vel voluptate, quasi deserunt quisquam animi pariatur alias nam corrupti molestias rem. Aut illum eos, officia beatae laboriosam assumenda, facere exercitationem nam corporis dolores totam amet, dolor sequi odio doloremque consectetur autem quaerat eveniet nulla voluptatem. Facilis rem animi ad et temporibus voluptatibus, nulla sed cum, ipsa eos maxime! A quo maxime magnam veritatis asperiores? Incidunt voluptatibus sit ea atque, aliquid dolore et non tempora architecto cupiditate inventore culpa, aspernatur eius magni. Voluptas quo veniam, possimus sit molestias ducimus architecto facere placeat id error cupiditate incidunt fugiat porro fugit quae assumenda rerum! Officia error pariatur adipisci atque rem temporibus sit beatae architecto, tenetur molestias. Dolor quidem delectus laborum ea nisi? Dolores et molestiae corrupti, expedita explicabo quis ut, dicta officia minus delectus odio provident reiciendis beatae eius dolorum minima ratione fugit tenetur placeat est iste laborum quia possimus praesentium! Rem vero fuga, quia hic ipsa reiciendis? Consectetur, numquam. Laudantium aspernatur voluptatibus velit repellendus reiciendis esse placeat sit sequi accusamus optio eveniet, aut veniam. Iusto nesciunt rerum, minus commodi quae inventore numquam soluta deserunt nemo voluptas eaque sapiente nostrum quam unde harum quia, voluptate accusamus. Amet, esse. Atque itaque quisquam aliquam nihil voluptatibus debitis incidunt qui ullam laborum? Porro dicta recusandae suscipit quibusdam ad tempore, ducimus placeat officia iure sit quis totam consequatur aliquid dolor distinctio repudiandae sapiente ut harum ullam. Assumenda in nostrum reiciendis corrupti ipsa autem ducimus iste provident unde quibusdam et eos totam illo, non quod possimus enim est magni quis! Quis ea minus architecto facere debitis molestiae repudiandae voluptatem autem voluptatum vitae dignissimos, fugiat molestias quaerat, inventore aspernatur! Voluptatem quae, ipsum non commodi dolore atque pariatur repellat laborum adipisci, aspernatur quibusdam odio tenetur accusantium corporis. Repudiandae sint magnam sed cumque fugit molestiae assumenda beatae qui? Mollitia incidunt doloremque labore laboriosam saepe, at doloribus omnis modi sit? Libero repudiandae deleniti enim et doloremque vero necessitatibus, accusamus nulla repellendus architecto odit! Rem doloribus aut, saepe repellendus quo itaque placeat a optio odio beatae voluptatum repellat impedit mollitia, assumenda esse dicta quaerat amet, velit aliquam eveniet neque. Quisquam, ipsum, quis autem tenetur natus impedit eius commodi, facere dicta enim quia magni nemo? Dicta provident aperiam neque itaque? Temporibus ea officia in saepe earum. Corrupti laudantium quas dolore inventore laborum. Delectus libero eum mollitia quod debitis voluptatem sit iste repellendus placeat maiores tenetur quidem rem soluta dicta fugiat eveniet, rerum non ut corrupti eos dolore. Perferendis iusto quis consequuntur quisquam doloremque nulla, mollitia sapiente esse.
      </p>
    </div>
  );
}

export default SinglePost;
