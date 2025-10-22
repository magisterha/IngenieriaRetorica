document.addEventListener('DOMContentLoaded', () => {
    const langSelector = document.getElementById('lang-selector');
    let currentLang = 'es'; // Idioma por defecto

    // --- INICIO: BASE DE DATOS DE TRADUCCIONES ---
    const translations = {
        "es": {
            "meta_title": "AI Rhetorica - Ingeniería Retórica para el Derecho Moderno",
            "hero_title": "Deje de Escribir Demandas.<br>Empiece a Diseñar Argumentos Persuasivos.",
            "hero_subtitle": "La fusión de la Retórica Clásica y la Inteligencia Artificial para el abogado moderno.",
            "hero_cta": "Obtener mi Diagnóstico Estratégico Gratuito",
            "p1_title": "El Manifiesto: Por qué la IA nos obliga a ser Retóricos",
            "p1_h3_1": "El Origen: Cuando el Abogado era un Orador",
            "p1_p_1": "Para Cicerón y Quintiliano, el Derecho (*Ius*) era inseparable del Arte de la Oratoria (*Ars Dicendi*). Un abogado no era un mero gestor de normas, sino un estratega de la persuasión. El objetivo no era solo tener la razón (el *Logos* de la ley), sino hacer que el juez sintiera la justicia (*Pathos*) y confiara en la credibilidad del orador (*Ethos*). Hubo un tiempo en que ganar un caso no dependía de *citar* la ley, sino de *construir* la verdad ante el tribunal.",
            "p1_h3_2": "La Crisis: La IA y la Comoditización del \"Logos\"",
            "p1_p_2": "Con el auge del positivismo, el Derecho se obsesionó con la norma. El *Logos* devoró al *Pathos* y al *Ethos*. Hoy, la IA Generativa culmina este proceso: es una \"bestia\" de *Logos*, capaz de citar más leyes y redactar más rápido que cualquier humano. El abogado que solo compite en \"saber la ley\" será reemplazado. ¿Pero puede la IA persuadir? No. La IA no tiene estrategia, no tiene *Phronesis* (prudencia) ni *Ethos* (credibilidad). Es un genio técnico sin alma.",
            "p1_h3_3": "La Oportunidad: La Retórica como Timón",
            "p1_p_3": "La IA no es la amenaza; es la herramienta que nos libera del trabajo mecánico para que podamos volver a ser lo único que ella no puede ser: **estrategas retóricos**. Para ganar en la era de la IA, no basta con pedirle \"redacta una demanda\". Hay que darle una **cadena de pensamiento** (un *Organon*) que le ordene *cómo pensar* como un orador clásico. La IA es el motor. La Retórica Clásica es el timón. Es hora de volver a unir lo que nunca debió separarse.",
            "p2_title": "Mis Servicios: El \"Organon\" Aplicado",
            "p2_s1_title": "1. Diagnóstico Estratégico (Gratuito)",
            "p2_s1_p": "Le ofrezco una demostración de poder. Rellene el formulario y ejecutaré su caso (anónimamente) a través de mi sistema, el **\"Organon de la Persuarsión Judicial\"**. Recibirá un informe preliminar revelando el *Status Causae* (nudo de la disputa), el *Genus Causae* (la \"atmósfera\" del caso) y la estrategia de apertura (*Proemium*) recomendada.",
            "p2_s2_title": "2. Redacción Retórica \"Llave en Mano\"",
            "p2_s2_p": "El servicio completo. Ejecuto el \"Organon\" (Fases I-VII) para su caso y le entrego dos artefactos: un **Escrito Jurídico completo**, optimizado para la persuasión, y el **Informe de *Actio***, un manual confidencial para que usted sepa exactamente cómo defenderlo en la vista oral, enfatizando el *Pathos* y anticipando refutaciones.",
            "p2_s3_title": "3. Consultoría y \"Organones\" a Medida",
            "p2_s3_p": "Para despachos que buscan escalar su calidad persuasiva. Analizo su práctica (penal, mercantil, etc.) y **co-diseño cadenas de pensamiento personalizadas** para sus casos concretos, formando a sus abogados en cómo dirigir la IA para obtener resultados ganadores y consistentes.",
            "p2_cta": "Acceder al Diagnóstico Gratuito",
            "p3_title": "Sobre el Fundador: El Ingeniero Retórico",
            "p3_p_1": "Mi perfil no es el de un 'prompt engineer' tradicional, sino el de un **Ingeniero Retórico**. Mi metodología nace de la intersección única de la Filología Clásica (Retórica, Lógica), la Lingüística Compleja (Latín, Griego y Chino Clásico) y la Ingeniería de Prompts avanzada.",
            "p3_p_2": "No le enseño a la IA *qué* escribir; le enseño *cómo pensar*.",
            "p3_h3_1": "Credenciales Clave",
            "p3_li_1": "<strong>Fundador & Ing. Retórico Principal</strong>, AI Rhetorica",
            "p3_li_2": "<strong>Experto Lingüista</strong>, desmontando estructuras gramaticales complejas (Latín, Griego) para aplicarlas al diseño de prompts de IA",
            "p3_li_3": "<strong>Profesor Universitario</strong> en IE University (Madrid) y Tamkang University (Taiwán)",
            "p3_li_4": "<strong>Formación Académica:</strong>",
            "p3_li_4_1": "MA & BA en Filología Clásica (Univ. de Salamanca)",
            "p3_li_4_2": "BA en Filología China (National Taiwan University)",
            "p3_li_4_3": "BA en Estudios de Asia Oriental (Univ. Autónoma de Madrid)",
            "p4_title": "Contacto",
            "p4_p_1": "Para consultas sobre el servicio de \"Organones a Medida\" para despachos, conferencias o colaboraciones académicas, puede contactarme directamente.",
            "p4_cta_1": "Enviar un Email",
            "p4_cta_2": "Ver Perfil Académico",
            "footer_text": "© 2025 Javier Caramés Sánchez | Ingeniería Retórica Aplicada"
        },
        "en": {
            "meta_title": "AI Rhetorica - Rhetorical Engineering for Modern Law",
            "hero_title": "Stop Writing Pleadings.<br>Start Designing Persuasive Arguments.",
            "hero_subtitle": "The fusion of Classical Rhetoric and Artificial Intelligence for the modern lawyer.",
            "hero_cta": "Get My Free Strategic Diagnosis",
            "p1_title": "The Manifesto: Why AI Forces Us to Be Rhetoricians",
            "p1_h3_1": "The Origin: When the Lawyer Was an Orator",
            "p1_p_1": "For Cicero and Quintilian, Law (*Ius*) was inseparable from the Art of Oratory (*Ars Dicendi*). A lawyer was not a mere manager of rules, but a strategist of persuasion. The goal was not only to be right (the *Logos* of the law), but to make the judge feel the justice (*Pathos*) and trust the speaker's credibility (*Ethos*). There was a time when winning a case depended not on *citing* the law, but on *constructing* the truth before the court.",
            "p1_h3_2": "The Crisis: AI and the Commoditization of \"Logos\"",
            "p1_p_2": "With the rise of positivism, Law became obsessed with the norm. *Logos* devoured *Pathos* and *Ethos*. Today, Generative AI culminates this process: it is a *Logos* 'beast',
capable of citing more laws and drafting faster than any human. The lawyer who only competes on 'knowing the law' will be replaced. But can AI persuade? No. AI has no strategy, no *Phronesis* (prudence), no *Ethos* (credibility). It is a technical genius without a soul.",
            "p1_h3_3": "The Opportunity: Rhetoric as the Rudder",
            "p1_p_3": "AI is not the threat; it is the tool that frees us from mechanical work so we can go back to being the one thing it cannot be: **rhetorical strategists**. To win in the age of AI, it's not enough to ask it to 'draft a complaint'. You must give it a **chain of thought** (an *Organon*) that commands it *how to think* like a classical orator. AI is the engine. Classical Rhetoric is the rudder. It is time to reunite what should never have been separated.",
            "p2_title": "My Services: The \"Organon\" Applied",
            "p2_s1_title": "1. Strategic Diagnosis (Free)",
            "p2_s1_p": "I offer you a demonstration of power. Fill out the form, and I will (anonymously) run your case data through my system, the **\"Organon of Judicial Persuasion\"**. You will receive a preliminary strategic report revealing your case's *Status Causae* (the true heart of the dispute), the *Genus Causae* (the case's 'atmosphere' and how to approach it), and the recommended opening strategy (*Proemium*).",
            "p2_s2_title": "2. \"Turnkey\" Rhetorical Drafting",
            "p2_s2_p": "The full service. I execute the complete \"Organon\" (Phases I-VII) for your case and deliver two artifacts: a **complete Legal Pleading**, optimized for persuasion, and the **'*Actio* Report'**, a confidential instruction manual for you, the lawyer, on *how* to defend that brief in court, what *Pathos* points to emphasize, and what refutations to anticipate.",
            "p2_s3_title": "3. Custom \"Organon\" Design & Consulting",
            "p2_s3_p": "For firms seeking to scale their persuasive quality. I analyze your specific practice (criminal, commercial, etc.) and **co-design custom chains of thought** for your specific cases, training your attorneys on how to direct AI to achieve winning, consistent results.",
            "p2_cta": "Access Free Diagnosis",
            "p3_title": "About the Founder: The Rhetorical Engineer",
            "p3_p_1": "My profile is not that of a traditional 'prompt engineer', but that of a **Rhetorical Engineer**. My methodology is born from the unique intersection of Classical Philology (Rhetoric, Logic), Complex Linguistics (Latin, Greek, and Classical Chinese), and advanced Prompt Engineering.",
            "p3_p_2": "I don't teach AI *what* to write; I teach it *how to think*.",
            "p3_h3_1": "Key Credentials",
            "p3_li_1": "<strong>Founder & Principal Rhetorical Engineer</strong>, AI Rhetorica",
            "p3_li_2": "<strong>Linguistics Expert</strong>, deconstructing complex grammatical structures (Latin, Greek) to apply them to AI prompt design",
            "p3_li_3": "<strong>University Lecturer</strong> at IE University (Madrid) and Tamkang University (Taiwan)",
            "p3_li_4": "<strong>Academic Background:</strong>",
            "p3_li_4_1": "MA & BA in Classical Philology (Univ. of Salamanca)",
            "p3_li_4_2": "BA in Chinese Philology (National Taiwan University)",
            "p3_li_4_3": "BA in East Asian Studies (Univ. Autónoma de Madrid)",
            "p4_title": "Contact",
            "p4_p_1": "For inquiries about the \"Custom Organon Design\" service for firms, conferences, or academic collaborations, you may contact me directly.",
            "p4_cta_1": "Send an Email",
            "p4_cta_2": "View Academic Profile",
            "footer_text": "© 2025 Javier Caramés Sánchez | Applied Rhetorical Engineering"
        },
        "zh-tw": {
            "meta_title": "AI Rhetorica - 現代法律的修辭工程",
            "hero_title": "停止撰寫訴狀。<br>開始設計有說服力的論點。",
            "hero_subtitle": "古典修辭學與人工智能的融合，為現代律師服務。",
            "hero_cta": "獲取我的免費策略診斷",
            "p1_title": "宣言：為什麼人工智能迫使我們成為修辭學家",
            "p1_h3_1": "起源：當律師即是演說家",
            "p1_p_1": "對西塞羅和昆體良來說，法律（*Ius*）與演說藝術（*Ars Dicendi*）密不可分。律師不僅是規則的管理者，更是說服的策略家。目標不僅是持理有據（法律的 *Logos*），更是要讓法官感受到正義（*Pathos*）並信任演說者的信譽（*Ethos*）。曾經，贏得一個案件不只靠*引用*法律，更靠在法庭上*建構*真相。",
            "p1_h3_2": "危機：人工智能與「Logos」的商品化",
            "p1_p_2": "隨著實證主義的興起，法律開始沉迷於規範。*Logos* 吞噬了 *Pathos* 和 *Ethos*。今天，生成式AI將此過程推向頂峰：它是一隻 *Logos* 的巨獸，能比任何人類引用更多法律、更快地起草文件。只會『懂法律』的律師將被取代。但AI能說服人嗎？不。AI沒有策略，沒有 *Phronesis*（明智），沒有 *Ethos*（信譽）。它是一個沒有靈魂的技術天才。",
            "p1_h3_3": "機遇：以修辭為舵",
            "p1_p_3": "AI不是威脅；它是一個將我們從機械性工作中解放出來的工具，讓我們能回歸到它唯一不能成為的角色：**修辭策略家**。在AI時代要贏，光是叫它『起草訴狀』是不夠的。你必須給它一個**思維鏈**（一個 *Organon*），命令它*如何*像古典演說家一樣思考。AI是引擎，古典修辭是舵。是時候將本不該分離的事物重新結合起來了。",
            "p2_title": "我的服務：「Organon」的應用",
            "p2_s1_title": "1. 策略診斷（免費）",
            "p2_s1_p": "我為您提供一次實力展示。填寫表單，我將（匿名）透過我的系統**「司法說服之Organon」**來運行您的案件數據。您將收到一份初步的策略報告，揭示您案件的 *Status Causae*（真正爭議點）、*Genus Causae*（案件的「氛圍」與應對方式）以及推薦的開場策略（*Proemium*）。",
            "p2_s2_title": "2. 「一站式」修辭寫作",
            "p2_s2_p": "完整的服務。我為您的案件執行完整的「Organon」（階段 I-VII），並交付兩項成果：一份**完整的法律文書**，經說服力優化，以及一份**《*Actio* 報告》**，這是一份給您（律師）的機密操作手冊，指導您*如何*在法庭上為該文書辯護，強調哪些 *Pathos*，並預測哪些反駁。",
            "p2_s3_title": "3. 事務所諮詢與客製化「Organon」設計",
            "p2_s3_p": "為尋求提升說服品質的事務所服務。我分析您的特定業務（刑事、商業等），並**共同設計客製化的思維鏈**，培訓您的律師如何指導AI以獲得一致的致勝成果。",
            "p2_cta": "獲取免費診斷",
            "p3_title": "關於創始人：修辭工程師",
            "p3_p_1": "我的簡介並非傳統的「提示工程師」，而是一名**修辭工程師**。我的方法論誕生於古典文獻學（修辭學、邏輯學）、複雜語言學（拉丁語、希臘語、古漢語）與先進提示工程的獨特交集。",
            "p3_p_2": "我不教AI*寫什麼*；我教它*如何思考*。",
            "p3_h3_1": "關鍵資歷",
            "p3_li_1": "<strong>創始人兼首席修辭工程師</strong>，AI Rhetorica",
            "p3_li_2": "<strong>語言學專家</strong>，解構複雜語法結構（拉丁語、希臘語）並將其應用於AI提示設計",
            "p3_li_3": "<strong>大學講師</strong>，任職於 IE 大學（馬德里）與淡江大學（台灣）",
            "p3_li_4": "<strong>學術背景：</strong>",
            "p3_li_4_1": "古典文獻學碩士與學士（薩拉曼卡大學）",
            "p3_li_4_2": "中國文學學士（國立臺灣大學）",
            "p3_li_4_3": "東亞研究學士（馬德里自治大學）",
            "p4_title": "聯繫方式",
            "p4_p_1": "關於事務所的「客製化Organon設計」服務、會議演講或學術合作的諮詢，您可以直接與我聯繫。",
            "p4_cta_1": "發送電子郵件",
            "p4_cta_2": "查看學術簡介",
            "footer_text": "© 2025 Javier Caramés Sánchez | 應用修辭工程"
        }
    };
    // --- FIN: BASE DE DATOS DE TRADUCCIONES ---


    // Función para APLICAR las traducciones
    function applyTranslations(langData) {
        if (!langData) {
            console.error(`No translation data found for lang: ${currentLang}`);
            return;
        }
        document.querySelectorAll('[data-i18n-key]').forEach(element => {
            const key = element.dataset.i18nKey;
            if (langData[key]) {
                // Usamos 'innerHTML' en lugar de 'textContent' para permitir etiquetas <strong>
                if (element.hasAttribute('data-i18n-placeholder') || element.placeholder) {
                    element.placeholder = langData[key];
                } else {
                    element.innerHTML = langData[key];
                }
            } else {
                console.warn(`Missing translation key: ${key} for lang: ${currentLang}`);
            }
        });
    }

    // Función principal para cambiar el idioma
    function setLanguage(lang) {
        if (lang === currentLang && document.documentElement.lang === lang) return; 
        
        currentLang = lang;
        const langData = translations[lang]; 
        
        if (!langData) {
            console.error(`Failed to set language: No translations found for '${lang}'`);
            return; 
        }

        applyTranslations(langData);
        document.documentElement.lang = lang;

        langSelector.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    }

    // Event Listeners para los botones
    langSelector.addEventListener('click', (e) => {
        if (e.target.classList.contains('lang-btn')) {
            const lang = e.target.dataset.lang;
            if (lang) {
                setLanguage(lang);
            }
        }
    });

    // Cargar el idioma por defecto (español) al iniciar
    setLanguage(currentLang);
});
