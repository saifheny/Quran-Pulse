const recitersData = [
{ id: 'afs', name: 'مشاري العفاسي', server: 'https://server8.mp3quran.net/afs/' },
{ id: 'maher', name: 'ماهر المعيقلي', server: 'https://server12.mp3quran.net/maher/' },
{ id: 'sds', name: 'عبدالرحمن السديس', server: 'https://server11.mp3quran.net/sds/' },
{ id: 'dosari', name: 'ياسر الدوسري', server: 'https://server11.mp3quran.net/yasser/' },
{ id: 'ajm', name: 'أحمد العجمي', server: 'https://server10.mp3quran.net/ajm/' },
{ id: 'minsh', name: 'المنشاوي (مجود)', server: 'https://server10.mp3quran.net/minsh/' },
{ id: 'islam', name: 'اسلام صبحي', server: 'https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/' },
{ id: 'basit', name: 'عبدالباسط عبدالصمد', server: 'https://server7.mp3quran.net/basit/' },
{ id: 'kurdi', name: 'رعد الكردي', server: 'https://server6.mp3quran.net/kurdi/' },
{ id: 'shatri', name: 'أبو بكر الشاطري', server: 'https://server11.mp3quran.net/shatri/' },
{ id: 'khaled', name: 'خالد الجليل', server: 'https://server10.mp3quran.net/jleel/' },
{ id: 'fares', name: 'فارس عباد', server: 'https://server8.mp3quran.net/frs_a/' },
{ id: 'nasser', name: 'ناصر القطامي', server: 'https://server6.mp3quran.net/qtm/' },
{ id: 'hazza', name: 'هزاع البلوشي', server: 'https://server11.mp3quran.net/hazza/' },
{ id: 'wadie', name: 'وديع اليمني', server: 'https://server6.mp3quran.net/wdee/' },
{ id: 'mansour', name: 'منصور السالمي', server: 'https://server14.mp3quran.net/mansor/' },
{ id: 'yasser_q', name: 'ياسر القرشي', server: 'https://server9.mp3quran.net/qurashi/' },
{ id: 'ahmad_nu', name: 'أحمد النفيس', server: 'https://server16.mp3quran.net/nufais/' },
{ id: 'kanakeri', name: 'عبدالرشيد صوفي', server: 'https://server16.mp3quran.net/soufi/Rewayat-Khalaf-A-n-Hamzah/' },
{ id: 'shur', name: 'سعود الشريم', server: 'https://server7.mp3quran.net/shur/' },
{ id: 'banna', name: 'محمود علي البنا', server: 'https://server8.mp3quran.net/bna/' },
{ id: 'juhany', name: 'عبدالله الجهني', server: 'https://server13.mp3quran.net/jhn/' },
{ id: 'budair', name: 'صلاح البدير', server: 'https://server6.mp3quran.net/s_bud/' },
{ id: 'hudhaify', name: 'علي الحذيفي', server: 'https://server9.mp3quran.net/hthfi/' },
{ id: 'matroud', name: 'عبدالله مطرود', server: 'https://server8.mp3quran.net/mtrod/' },
{ id: 'bsfar', name: 'عبدالله بصفر', server: 'https://server6.mp3quran.net/bsfr/' },
{ id: 'refat', name: 'محمد رفعت', server: 'https://server14.mp3quran.net/refat/' },
{ id: 'tablawi', name: 'محمد الطبلاوي', server: 'https://server12.mp3quran.net/tblawi/' },
{ id: 'qazabri', name: 'عمر القزابري', server: 'https://server9.mp3quran.net/omar_warsh/' },
{ id: 'dokali', name: 'الدكالي محمد العالم', server: 'https://server7.mp3quran.net/dokali/' },
{ id: 'zamil', name: 'الزامل', server: 'https://server9.mp3quran.net/zamil/' },
{ id: 'ayyoub', name: 'محمد أيوب', server: 'https://server8.mp3quran.net/ayyoub/' },
{ id: 'muh_j', name: 'محمد جبريل', server: 'https://server8.mp3quran.net/jbrl/' },
{ id: 'saad', name: 'سعد الغامدي', server: 'https://server7.mp3quran.net/s_gmd/' },
{ id: 'salah_buk', name: 'صلاح بو خاطر', server: 'https://server8.mp3quran.net/bu_khtr/' },
{ id: 'hani', name: 'هاني الرفاعي', server: 'https://server8.mp3quran.net/hani/' },
{ id: 'thubaiti', name: 'عبدالبارئ الثبيتي', server: 'https://server6.mp3quran.net/thubti/' },
{ id: 'muh_l', name: 'محمد اللحيدان', server: 'https://server8.mp3quran.net/lhdan/' },
{ id: 'akdar', name: 'إبراهيم الأخضر', server: 'https://server6.mp3quran.net/akhdr/' },
{ id: 'ali_jaber', name: 'علي جابر', server: 'https://server11.mp3quran.net/a_jbr/' },
{ id: 'sowailim', name: 'عبدالعزيز السويلم', server: 'https://server14.mp3quran.net/sowailim/' },
{ id: 'khalifa', name: 'خليفة الطنيجي', server: 'https://server12.mp3quran.net/tunaiji/' },
{ id: 'alzain', name: 'الزين محمد أحمد', server: 'https://server9.mp3quran.net/alzain/' },
{ id: 'bilal', name: 'بلال دربالي', server: 'https://server14.mp3quran.net/bilal/' },
{ id: 'lafi', name: 'لافي العوني', server: 'https://server14.mp3quran.net/lafi/' },
{ id: 'harthi', name: 'محمد الحارثي', server: 'https://server14.mp3quran.net/m_harthi/' },
{ id: 'kandari', name: 'عبدالله الكندري', server: 'https://server10.mp3quran.net/kandari/' },
{ id: 'abdelhady', name: 'عبدالرحمن العوسي', server: 'https://server6.mp3quran.net/aloosi/' },
{ id: 'wael', name: 'وائل الدسوقي', server: 'https://server14.mp3quran.net/wael/' },
{ id: 'mustafa', name: 'مصطفى إسماعيل', server: 'https://server8.mp3quran.net/mustafa/' },
{ id: 'husary', name: 'الحصري (مرتل)', server: 'https://server13.mp3quran.net/husr/' },
{ id: 'awad', name: 'عوض الجهني', server: 'https://server11.mp3quran.net/awad/' },
{ id: 'moh_abd', name: 'محمد عبدالكريم', server: 'https://server12.mp3quran.net/m_krm/' },
{ id: 'moh_rashad', name: 'محمد رشاد الشريف', server: 'https://server10.mp3quran.net/rashad/' },
{ id: 'yousef', name: 'يوسف بن نوح', server: 'https://server8.mp3quran.net/noah/' },
{ id: 'khayat', name: 'عبدالله خياط', server: 'https://server12.mp3quran.net/khayat/' }
];
const azkarData = {
morning: [
{ txt: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.", count: 1 },
{ txt: "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ.", count: 1 },
{ txt: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي، فَاغْفِرْ لِي؛ فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.", count: 1 },
{ txt: "اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتَكَ وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ.", count: 4 },
{ txt: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ، وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ.", count: 3 },
{ txt: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.", count: 7 },
{ txt: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.", count: 3 },
{ txt: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا.", count: 3 },
{ txt: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.", count: 1 },
{ txt: "أَصْبَحْنَا عَلَى فِطْرَةِ الْإِسْلَامِ وَعَلَى كَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ.", count: 1 },
{ txt: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ.", count: 3 },
{ txt: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ.", count: 10 }
],
evening: [
{ txt: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.", count: 1 },
{ txt: "اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ.", count: 1 },
{ txt: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي، فَاغْفِرْ لِي؛ فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.", count: 1 },
{ txt: "اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتَكَ وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ.", count: 4 },
{ txt: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ، وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ.", count: 3 },
{ txt: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.", count: 7 },
{ txt: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.", count: 3 },
{ txt: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا.", count: 3 },
{ txt: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.", count: 1 },
{ txt: "أَمْسَيْنَا عَلَى فِطْرَةِ الْإِسْلَامِ وَعَلَى كَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ.", count: 1 },
{ txt: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.", count: 3 },
{ txt: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ.", count: 10 }
],
sleep: [
{ txt: "بِاسْمِكَ رَبِّـي وَضَعْـتُ جَنْـبي ، وَبِكَ أَرْفَعُـه، فَإِن أَمْسَـكْتَ نَفْسـي فارْحَـمْها ، وَإِنْ أَرْسَلْتَـها فاحْفَظْـها بِمـا تَحْفَـظُ بِه عِبـادَكَ الصّـالِحـين.", count: 1 },
{ txt: "اللّهُـمَّ إِنَّـكَ خَلَـقْتَ نَفْسـي وَأَنْـتَ تَوَفّـاهـا لَكَ ممَـاتُـها وَمَحْـياها ، إِنْ أَحْيَيْـتَها فاحْفَظْـها ، وَإِنْ أَمَتَّـها فاغْفِـرْ لَـها . اللّهُـمَّ إِنّـي أَسْـأَلُـكَ العـافِـيَة.", count: 1 },
{ txt: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ.", count: 3 },
{ txt: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.", count: 1 },
{ txt: "سُبْحَانَ اللَّهِ (33)، وَالْحَمْدُ لِلَّهِ (33)، وَاللَّهُ أَكْبَرُ (34).", count: 1 }
],
prayer: [
{ txt: "أَسْتَغْفِرُ اللهَ (ثلاثاً) .. اللّهُـمَّ أَنْـتَ السَّلامُ ، وَمِـنْكَ السَّلام ، تَبارَكْتَ يا ذا الجَـلالِ وَالإِكْـرام.", count: 1 },
{ txt: "لا إلهَ إلاّ اللّهُ وحدَهُ لا شريكَ لهُ، لهُ المُـلْكُ ولهُ الحَمْد، وهوَ على كلّ شَيءٍ قَدير، اللّهُـمَّ لا مانِعَ لِما أَعْطَـيْت، وَلا مُعْطِـيَ لِما مَنَـعْت، وَلا يَنْفَـعُ ذا الجَـدِّ مِنْـكَ الجَـد.", count: 1 },
{ txt: "لا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ، لَا إِلَهَ إِلَّا اللَّهُ، وَلَا نَعْبُدُ إِلَّا إِيَّاهُ، لَهُ النِّعْمَةُ وَلَهُ الْفَضْلُ وَلَهُ الثَّنَاءُ الْحَسَنُ، لَا إِلَهَ إِلَّا اللَّهُ مُخْلِصِينَ لَهُ الدِّينَ وَلَوْ كَرِهَ الْكَافِرُونَ.", count: 1 },
{ txt: "سُبْحَانَ اللَّهِ (33)، وَالْحَمْدُ لِلَّهِ (33)، وَاللَّهُ أَكْبَرُ (33)، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ (مرة واحدة).", count: 1 },
{ txt: "قراءة آية الكرسي.", count: 1 },
{ txt: "قراءة المعوذات (الإخلاص، الفلق، الناس).", count: 1 }
],
wake: [
{ txt: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ.", count: 1 },
{ txt: "لا إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلا إِلَهَ إِلاَّ اللَّهُ، وَاللَّهُ أَكْبَرُ، وَلا حَوْلَ وَلا قُوَّةَ إِلاَّ بِاللَّهِ الْعَلِيِّ الْعَظِيمِ، رَبِّ اغْفِرْ لِي.", count: 1 },
{ txt: "الْحَمْدُ لِلَّهِ الَّذِي عَافَانِي فِي جَسَدِي، وَرَدَّ عَلَيَّ رُوحِي، وَأَذِنَ لِي بِذِكْرِهِ.", count: 1 }
],
mosque: [
{ txt: "اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُوراً، وَفِي لِسَانِي نُوراً، وَفِي سَمْعِي نُوراً، وَفِي بَصَرِي نُوراً، وَمِنْ فَوْقِي نُوراً، وَمِنْ تَحْتِي نُوراً، وَعَنْ يَمِينِي نُوراً، وَعَنْ شِمَالِي نُوراً، وَمِنْ أَمَامِي نُوراً، وَمِنْ خَلْفِي نُوراً، وَاجْعَلْ فِي نَفْسِي نُوراً، وَأَعْظِمْ لِي نُوراً.", count: 1 },
{ txt: "أَعُوذُ بِاللَّهِ الْعَظِيمِ، وَبِوَجْهِهِ الْكَرِيمِ، وَسُلْطَانِهِ الْقَدِيمِ، مِنَ الشَّيْطَانِ الرَّجِيمِ، بِسْمِ اللَّهِ، وَالصَّلاةُ وَالسَّلامُ عَلَى رَسُولِ اللَّهِ، اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ. (عند الدخول)", count: 1 },
{ txt: "بِسْمِ اللَّهِ وَالصَّلاةُ وَالسَّلامُ عَلَى رَسُولِ اللَّهِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ، اللَّهُمَّ اعْصِمْنِي مِنَ الشَّيْطَانِ الرَّجِيمِ. (عند الخروج)", count: 1 }
],
home: [
{ txt: "بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى رَبِّنَا تَوَكَّلْنَا، ثُمَّ لِيُسَلِّمْ عَلَى أَهْلِهِ. (عند الدخول)", count: 1 },
{ txt: "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلا حَوْلَ وَلا قُوَّةَ إِلاَّ بِاللَّهِ. (عند الخروج)", count: 1 },
{ txt: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أَضِلَّ، أَوْ أُضَلَّ، أَوْ أَزِلَّ، أَوْ أُزَلَّ، أَوْ أَظْلِمَ، أَوْ أُظْلَمَ، أَوْ أَجْهَلَ، أَوْ يُجْهَلَ عَلَيَّ. (عند الخروج)", count: 1 }
],
travel: [
{ txt: "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ.", count: 1 },
{ txt: "اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى، وَمِنَ الْعَمَلِ مَا تَرْضَى، اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ.", count: 1 },
{ txt: "اللَّهُمَّ أَنْتَ الصَّاحِبُ فِي السَّفَرِ، وَالْخَلِيفَةُ فِي الْأَهْلِ.", count: 1 }
],
food: [
{ txt: "بِسْمِ اللَّهِ. (قبل الأكل)", count: 1 },
{ txt: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلا قُوَّةٍ. (بعد الأكل)", count: 1 },
{ txt: "الْحَمْدُ لِلَّهِ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ. (بعد الأكل)", count: 1 }
],
anxiety: [
{ txt: "لا إِلَهَ إِلاَّ اللَّهُ الْعَظِيمُ الْحَلِيمُ، لا إِلَهَ إِلاَّ اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ، لا إِلَهَ إِلاَّ اللَّهُ رَبُّ السَّمَاوَاتِ وَرَبُّ الْأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيمِ.", count: 1 },
{ txt: "اللَّهُمَّ رَحْمَتَكَ أَرْجُو فَلا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ، وَأَصْلِحْ لِي شَأْنِي كُلَّهُ، لا إِلَهَ إِلاَّ أَنْتَ.", count: 1 },
{ txt: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ، وَغَلَبَةِ الرِّجَالِ.", count: 3 }
]
};
const asmaData = [
["الرَّحْمَنُ","ذو الرحمة الواسعة"],["الرَّحِيمُ","ذو الرحمة الدائمة"],["المَلِكُ","المالك المتصرف"],["القُدُّوسُ","المنزّه عن كل نقص"],["السَّلَامُ","ذو السلامة من العيوب"],["المُؤْمِنُ","المصدّق لرسله"],["المُهَيْمِنُ","الرقيب الحافظ"],["العَزِيزُ","الغالب الذي لا يُغلب"],["الجَبَّارُ","العظيم الذي يجبر الكسير"],["المُتَكَبِّرُ","المتعالي عن صفات الخلق"],
["الخَالِقُ","الموجد للأشياء من العدم"],["البَارِئُ","المُبدع المنشئ"],["المُصَوِّرُ","الذي أعطى كل شيء صورته"],["الغَفَّارُ","كثير المغفرة"],["القَهَّارُ","الذي قهر كل شيء"],["الوَهَّابُ","كثير العطاء بلا عوض"],["الرَّزَّاقُ","المتكفل بالرزق"],["الفَتَّاحُ","الذي يفتح أبواب الرزق والرحمة"],["العَلِيمُ","المحيط علمه بكل شيء"],["القَابِضُ","الذي يقبض الأرزاق بحكمته"],
["البَاسِطُ","الذي يوسّع الرزق"],["الخَافِضُ","الذي يخفض الجبارين"],["الرَّافِعُ","الذي يرفع المؤمنين"],["المُعِزُّ","الذي يهب العزّة"],["المُذِلُّ","الذي يُذلّ من يشاء"],["السَّمِيعُ","الذي يسمع كل شيء"],["البَصِيرُ","الذي يرى كل شيء"],["الحَكَمُ","الحاكم العادل"],["العَدْلُ","ذو العدل المطلق"],["اللَّطِيفُ","العالم بدقائق الأمور"],
["الخَبِيرُ","المطّلع على حقائق الأشياء"],["الحَلِيمُ","الذي لا يعجل بالعقوبة"],["العَظِيمُ","ذو العظمة والكبرياء"],["الغَفُورُ","واسع المغفرة"],["الشَّكُورُ","الذي يُثيب على القليل"],["العَلِيُّ","المتعالي فوق خلقه"],["الكَبِيرُ","ذو الكبرياء والعظمة"],["الحَفِيظُ","الحافظ لكل شيء"],["المُقِيتُ","المقتدر على كل شيء"],["الحَسِيبُ","الكافي المحاسب"],
["الجَلِيلُ","ذو الجلال والعظمة"],["الكَرِيمُ","كثير الخير والعطاء"],["الرَّقِيبُ","المطّلع الذي لا يغفل"],["المُجِيبُ","الذي يجيب الدعاء"],["الوَاسِعُ","الذي وسع كل شيء"],["الحَكِيمُ","ذو الحكمة البالغة"],["الوَدُودُ","المحبّ لعباده الصالحين"],["المَجِيدُ","ذو المجد والشرف"],["البَاعِثُ","الذي يبعث الخلق"],["الشَّهِيدُ","المطّلع على كل شيء"],
["الحَقُّ","الثابت الموجود حقاً"],["الوَكِيلُ","المتوكَّل عليه"],["القَوِيُّ","ذو القوة المطلقة"],["المَتِينُ","الشديد القوة"],["الوَلِيُّ","الناصر والمعين"],["الحَمِيدُ","المستحق للحمد"],["المُحْصِي","الذي أحصى كل شيء"],["المُبْدِئُ","الذي بدأ الخلق"],["المُعِيدُ","الذي يُعيد الخلق"],["المُحْيِي","الذي يُحيي الموتى"],
["المُمِيتُ","الذي يُميت الأحياء"],["الحَيُّ","الدائم الحياة"],["القَيُّومُ","القائم بتدبير الخلق"],["الوَاجِدُ","الغني الذي لا يفتقر"],["المَاجِدُ","ذو المجد التام"],["الوَاحِدُ","المنفرد بالذات"],["الصَّمَدُ","المقصود في الحوائج"],["القَادِرُ","ذو القدرة التامة"],["المُقْتَدِرُ","المتمكن الذي لا يعجزه شيء"],["المُقَدِّمُ","الذي يُقدّم من يشاء"],
["المُؤَخِّرُ","الذي يُؤخّر من يشاء"],["الأَوَّلُ","الذي ليس قبله شيء"],["الآخِرُ","الذي ليس بعده شيء"],["الظَّاهِرُ","الذي ظهر فوق كل شيء"],["البَاطِنُ","المحتجب عن الأبصار"],["الوَالِي","المتولي لأمور خلقه"],["المُتَعَالِ","المتنزّه عن صفات الخلق"],["البَرُّ","العطوف كثير البر"],["التَّوَّابُ","الذي يقبل التوبة"],["المُنْتَقِمُ","الذي ينتقم من العصاة"],
["العَفُوُّ","الذي يمحو الذنوب"],["الرَّؤُوفُ","ذو الرأفة والشفقة"],["مَالِكُ المُلْكِ","المتصرف في ملكه"],["ذُو الجَلَالِ وَالإِكْرَامِ","ذو العظمة والكرم"],["المُقْسِطُ","العادل في حكمه"],["الجَامِعُ","الذي يجمع الخلائق"],["الغَنِيُّ","المستغني عن كل شيء"],["المُغْنِي","الذي يُغني من يشاء"],["المَانِعُ","الذي يمنع بحكمته"],["الضَّارُّ","المقدّر للضرّ بحكمة"],
["النَّافِعُ","المقدّر للنفع"],["النُّورُ","الذي نوّر السماوات والأرض"],["الهَادِي","الذي يهدي من يشاء"],["البَدِيعُ","المبدع بلا مثال"],["البَاقِي","الدائم الذي لا يفنى"],["الوَارِثُ","الباقي بعد فناء الخلق"],["الرَّشِيدُ","المرشد إلى الصواب"],["الصَّبُورُ","الذي لا يعجل على العصاة"]
];
let allSurahs = [];
let currentReciter = null;
let currentSurahIndex = 0;
let tasbihCount = 0;
const audio = document.getElementById('audio');
const contentArea = document.querySelector('.content-area');

contentArea.addEventListener('scroll', () => {
const btn = document.getElementById('backToTop');
if (contentArea.scrollTop > 300) btn.classList.add('show');
else btn.classList.remove('show');
});

function scrollToTop() {
contentArea.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onload = () => {
setTimeout(() => {
const splash = document.getElementById('splash');
splash.style.opacity = '0';
setTimeout(() => splash.style.display = 'none', 500);
}, 2000);
initApp();
};
async function initApp() {
renderReciters();
renderAsma();
fetchSurahs();
getPrayerTimes();
initPWA();
}
let deferredPrompt;
function initPWA() {
window.addEventListener('beforeinstallprompt', (e) => {
e.preventDefault();
deferredPrompt = e;
const banner = document.getElementById('installAppBanner');
if (banner) banner.style.display = 'flex';
});
const btn = document.getElementById('installAppBtn');
if(btn) {
btn.addEventListener('click', async () => {
document.getElementById('installAppBanner').style.display = 'none';
if (deferredPrompt) {
deferredPrompt.prompt();
const { outcome } = await deferredPrompt.userChoice;
deferredPrompt = null;
}
});
}
}
function promptForLocation() {
const prompt = document.getElementById('locationPrompt');
if (prompt) prompt.style.display = 'flex';
}
function closeLocationPrompt() {
const prompt = document.getElementById('locationPrompt');
if (prompt) prompt.style.display = 'none';
}
function requestLocationPermission() {
closeLocationPrompt();
const status = document.getElementById('prayer-status');
if(status) status.innerText = "جاري تحديث الموقع...";
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(p => {
fetchPrayers(p.coords.latitude, p.coords.longitude);
}, (e) => {
if(status) status.innerText = "تم رفض الوصول للموقع، عرض توقيت مكة.";
fetchPrayers(21.4225, 39.8262);
});
} else {
fetchPrayers(21.4225, 39.8262);
}
}
function shareApp() {
if (navigator.share) {
navigator.share({
title: 'نبض | تطبيق المسلم الشامل',
text: 'استمع للقرآن الكريم، واعرف مواقيت الصلاة، والأذكار وأسماء الله الحسنى - مجاناً بالكامل!',
url: window.location.href
}).catch(console.error);
} else {
alert('متصفحك لا يدعم المشاركة المباشرة. الرابط: ' + window.location.href);
}
}
function switchTab(id) {
document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
document.getElementById(id).classList.add('active');
document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
const btn = document.querySelector(`.nav-btn[onclick="switchTab('${id}')"]`);
if(btn) btn.classList.add('active');
}
function renderReciters(filter = "") {
const list = document.getElementById('recitersList');
list.innerHTML = '';
const filtered = recitersData.filter(r => r.name.includes(filter));
filtered.forEach(r => {
const div = document.createElement('div');
div.className = 'list-item';
div.onclick = () => playReciter(r.id);
div.innerHTML = `<div class="item-icon"><i class="fas fa-headphones-simple"></i></div><div class="item-title">${r.name}</div><i class="fas fa-play" style="color:var(--text-muted)"></i>`;
list.appendChild(div);
});
}
function filterReciters(val) {
renderReciters(val);
}
async function fetchSurahs() {
try {
const res = await fetch('https://api.alquran.cloud/v1/surah');
const data = await res.json();
allSurahs = data.data;
const select = document.getElementById('readerSelect');
allSurahs.forEach(s => {
const opt = document.createElement('option');
opt.value = s.number;
opt.textContent = `${s.number}. ${s.name}`;
select.appendChild(opt);
});
} catch(e) {
console.error(e);
}
}
async function openReader() {
const num = document.getElementById('readerSelect').value;
const reader = document.getElementById('fullReader');
const text = document.getElementById('readerText');
reader.style.display = 'flex';
text.innerHTML = '<div style="text-align:center; color:var(--primary); padding-top:50px;"><i class="fas fa-circle-notch fa-spin fa-3x"></i></div>';
try {
const res = await fetch(`https://api.alquran.cloud/v1/surah/${num}/quran-uthmani`);
const data = await res.json();
let html = '';
if(num != 1 && num != 9) html += `<div style="text-align:center; margin-bottom:40px; color:var(--primary); font-size:2.5rem; font-weight:bold;">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>`;
data.data.ayahs.forEach(a => {
html += `${a.text} <span style="color:var(--gold); font-size:0.7em; margin: 0 10px;">(${a.numberInSurah})</span> `;
});
text.innerHTML = html;
} catch(e) {
text.innerHTML = "حدث خطأ في تحميل السورة";
}
}
function closeReader() {
document.getElementById('fullReader').style.display = 'none';
}
function renderAsma(filter = '') {
const grid = document.getElementById('asmaGrid');
grid.innerHTML = '';
asmaData.forEach((a, i) => {
if (filter && !a[0].includes(filter) && !a[1].includes(filter)) return;
const card = document.createElement('div');
card.className = 'asma-card';
card.onclick = () => openAsmaPopup(i);
card.innerHTML = `<div class="asma-num">${i + 1}</div><div class="asma-name">${a[0]}</div><div class="asma-meaning">${a[1]}</div>`;
grid.appendChild(card);
});
}
function filterAsma(val) { renderAsma(val); }
function openAsmaPopup(i) {
document.getElementById('asmaPopupNum').innerText = i + 1;
document.getElementById('asmaPopupName').innerText = asmaData[i][0];
document.getElementById('asmaPopupMeaning').innerHTML = `<strong>${asmaData[i][1]}</strong><br><br>هذا الاسم الكريم "${asmaData[i][0]}" هو الاسم رقم ${i + 1} من أسماء الله الحسنى التسعة والتسعين. ومعناه أن الله سبحانه وتعالى ${asmaData[i][1]}. وعلى المسلم أن يتعرف على أسماء الله الحسنى ويتدبر معانيها ويدعو الله بها، قال تعالى: ﴿وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا﴾.`;
document.getElementById('asmaOverlay').style.display = 'flex';
}
function closeAsmaPopup(e, force) {
if (force || e.target.id === 'asmaOverlay') document.getElementById('asmaOverlay').style.display = 'none';
}
function openAzkar(type) {
const data = azkarData[type];
const container = document.getElementById('azkarText');
container.innerHTML = '';
data.forEach(d => {
container.innerHTML += `
<div class="azkar-list-item">
<div class="azkar-text">${d.txt}</div>
<div class="azkar-meta">
<span>التكرار: ${d.count}</span>
<button class="copy-btn" onclick="copyText('${d.txt}')"><i class="fas fa-copy"></i> نسخ</button>
</div>
</div>
`;
});
document.getElementById('fullAzkar').style.display = 'flex';
}
function closeAzkar() {
document.getElementById('fullAzkar').style.display = 'none';
}
function copyText(t) {
navigator.clipboard.writeText(t);
}
function getPrayerTimes() {
fetchPrayers(21.4225, 39.8262);
}
let nextPrayerTime = null;
let countdownInterval = null;
async function fetchPrayers(lat, lng) {
try {
const d = new Date();
const dateStr = `${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`;
const res = await fetch(`https://api.aladhan.com/v1/timings/${dateStr}?latitude=${lat}&longitude=${lng}&method=4`);
const data = await res.json();
const t = data.data.timings;
const h = data.data.date.hijri;
document.getElementById('hijri-date').innerText = `${h.weekday.ar} ${h.day} ${h.month.ar} ${h.year}`;
const pList = [
{k:'Fajr', n:'الفجر'}, {k:'Sunrise', n:'الشروق'}, {k:'Dhuhr', n:'الظهر'},
{k:'Asr', n:'العصر'}, {k:'Maghrib', n:'المغرب'}, {k:'Isha', n:'العشاء'}
];
const container = document.getElementById('prayer-times-list');
container.innerHTML = '';
let next = null;
const now = d.getHours() * 60 + d.getMinutes();
pList.forEach(p => {
const timeStr = t[p.k];
const [hrs, mins] = timeStr.split(':').map(Number);
const pMin = hrs * 60 + mins;
let activeClass = "";
if(!next && pMin > now) {
next = { name: p.n, time: timeStr, hrs, mins };
activeClass = "active";
}
container.innerHTML += `
<div class="prayer-time-row ${activeClass}">
<span class="p-name">${p.n}</span>
<span class="p-time">${timeStr}</span>
</div>
`;
});

if(!next) {
const fajrTimeStr = t['Fajr'];
const [fHrs, fMins] = fajrTimeStr.split(':').map(Number);
next = { name: 'الفجر', time: fajrTimeStr, hrs: fHrs, mins: fMins, isTomorrow: true };
}

if(next) {
startCountdown(next.hrs, next.mins, next.name, next.isTomorrow);
}

} catch(e) {
console.error(e);
}
}

function startCountdown(hrs, mins, name, isTomorrow) {
if(countdownInterval) clearInterval(countdownInterval);
document.getElementById('prayer-status').innerText = `باقي على صلاة ${name}`;
countdownInterval = setInterval(() => {
const now = new Date();
let targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hrs, mins, 0);
if (isTomorrow) targetDate.setDate(targetDate.getDate() + 1);
let diff = targetDate - now;
if (diff <= 0) {
document.getElementById('prayer-countdown').innerText = "00:00:00";
document.getElementById('prayer-status').innerText = `حان الآن موعد صلاة ${name}`;
clearInterval(countdownInterval);
return;
}
const h = Math.floor(diff / 3600000).toString().padStart(2, '0');
const m = Math.floor((diff % 3600000) / 60000).toString().padStart(2, '0');
const s = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0');
document.getElementById('prayer-countdown').innerText = `${h}:${m}:${s}`;
}, 1000);
}
function openTasbih() {
document.getElementById('tasbihOverlay').style.display = 'flex';
}
function closeTasbih() {
document.getElementById('tasbihOverlay').style.display = 'none';
}
function doTasbih() {
tasbihCount++;
document.getElementById('tasbihCounter').innerText = tasbihCount;
if(navigator.vibrate) navigator.vibrate(20);
}
function resetTasbih() {
tasbihCount = 0;
document.getElementById('tasbihCounter').innerText = 0;
}
function changeDhikr() {
document.getElementById('tasbihWord').innerText = document.getElementById('dhikrSelect').value;
resetTasbih();
}
function playReciter(id) {
currentReciter = recitersData.find(r => r.id === id);
const select = document.getElementById('playerSurahSelect');
select.innerHTML = '';
allSurahs.forEach((s, i) => {
const opt = document.createElement('option');
opt.value = i;
opt.textContent = `${s.number}. ${s.name}`;
select.appendChild(opt);
});
playSurah(0);
}
function playSelectedSurah() {
const val = parseInt(document.getElementById('playerSurahSelect').value);
playSurah(val);
}
function playSurah(idx) {
if(!currentReciter || !allSurahs[idx]) return;
currentSurahIndex = idx;
const s = allSurahs[idx];
const num = String(s.number).padStart(3, '0');
audio.src = `${currentReciter.server}${num}.mp3`;
audio.play();
document.getElementById('persistent-player').style.display = 'block';
document.getElementById('p-title').innerText = s.name;
document.getElementById('p-reciter').innerText = currentReciter.name;
document.getElementById('playerSurahSelect').value = idx;
document.getElementById('playIcon').className = 'fas fa-pause';
}
function togglePlay() {
if(audio.paused) {
audio.play();
document.getElementById('playIcon').className = 'fas fa-pause';
} else {
audio.pause();
document.getElementById('playIcon').className = 'fas fa-play';
}
}
function closePlayer() {
audio.pause();
document.getElementById('persistent-player').style.display = 'none';
}
function prevTrack() {
if(currentSurahIndex > 0) playSurah(currentSurahIndex - 1);
}
function nextTrack() {
if(currentSurahIndex < 113) playSurah(currentSurahIndex + 1);
}
function toggleSurahPicker() {
const w = document.getElementById('surahPickerWrap');
w.style.display = w.style.display === 'none' ? 'block' : 'none';
}
audio.onended = () => { nextTrack(); };
