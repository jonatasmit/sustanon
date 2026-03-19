import "@/App.css";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Beaker,
  Flame,
  Shield,
  Activity,
  Zap,
  Star,
  Play,
  CheckCircle,
  Truck,
  Clock,
  CreditCard,
  MessageCircle,
  Instagram,
  Facebook,
  Phone,
  ChevronDown,
  Package,
  Award,
  Heart,
  TrendingUp,
  X,
  Menu,
  Syringe,
  Pill,
  Volume2,
  VolumeX,
  MessageSquare
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Card, CardContent } from "./components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from "./components/ui/dropdown-menu";

// Constants
const WHATSAPP_NUMBER = "5521972232170";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Tenho interesse no Sustanon - Durateston. Gostaria de mais informações.`;
const INSTAGRAM_LINK = "https://instagram.com/suplementosmaisbaratos";
const FACEBOOK_LINK = "https://facebook.com/complementosmaisbaratos";
const WEBSITE_LINK = "https://www.suplementosmaisbaratos.com.br";
const MUSIC_URL = "https://customer-assets.emergentagent.com/job_wizardly-bouman-3/artifacts/dzrk8r1t_B-Dynamitze%20-%20Quer%20Ficar%20Grand%C3%A3o%20%28CLIP%20OFICIAL%29%20-%20B-DYNAMITZE%20OFFICIAL%20%28youtube%29%20%28mp3cut.net%29.mp3";

// Menu items for products
const INJECTABLE_PRODUCTS = [
  { name: "Testosterona", message: "Tenho interesse em Testosterona." },
  { name: "Deposteron", message: "Tenho interesse em Deposteron." },
  { name: "Propionato", message: "Tenho interesse em Propionato de Testosterona." },
  { name: "Enantato", message: "Tenho interesse em Enantato de Testosterona." },
  { name: "Deca-Durabolin", message: "Tenho interesse em Deca-Durabolin." },
  { name: "Durateston", message: "Tenho interesse em Durateston." },
  { name: "Primobolan", message: "Tenho interesse em Primobolan." },
  { name: "Boldenona", message: "Tenho interesse em Boldenona." },
  { name: "Trembolona", message: "Tenho interesse em Trembolona." },
];

const ORAL_PRODUCTS = [
  { name: "Dianabol", message: "Tenho interesse em Dianabol." },
  { name: "Oxandrolona", message: "Tenho interesse em Oxandrolona." },
  { name: "Stanozolol", message: "Tenho interesse em Stanozolol." },
  { name: "Hemogenin", message: "Tenho interesse em Hemogenin." },
  { name: "Halotestin", message: "Tenho interesse em Halotestin." },
];

const getProductWhatsAppLink = (message) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! ${message}`;
};

// Assets
const ASSETS = {
  logo: "https://customer-assets.emergentagent.com/job_cb62d599-aee6-476d-9abd-89f0590dfbd5/artifacts/g34piw1w_IMG_3116.png",
  sustanon: "https://www.suplementosmaisbaratos.com.br/wp-content/uploads/2026/03/sustan-xt-muscle-pharm-durateston.png",
  primobolan: "https://customer-assets.emergentagent.com/job_wizardly-bouman-3/artifacts/bo2waug1_IMG_3129.png",
  masteron: "https://customer-assets.emergentagent.com/job_wizardly-bouman-3/artifacts/tmw2ckxp_IMG_3122.png",
  enantato: "https://customer-assets.emergentagent.com/job_wizardly-bouman-3/artifacts/j5f2h2o2_IMG_3121.png",
  packaging: "https://customer-assets.emergentagent.com/job_cb62d599-aee6-476d-9abd-89f0590dfbd5/artifacts/6muerg8t_5f32f601-3632-492a-b8d2-b1ea22fd725c.jpeg",
  shipping: "https://customer-assets.emergentagent.com/job_cb62d599-aee6-476d-9abd-89f0590dfbd5/artifacts/pldouqqx_27752ed2-062d-444b-bc0d-9dc7c6a1466d.jpeg",
  sponsor: "https://customer-assets.emergentagent.com/job_cb62d599-aee6-476d-9abd-89f0590dfbd5/artifacts/ebmjx0gh_IMG_4670.jpeg",
  video1: "https://customer-assets.emergentagent.com/job_wizardly-bouman-3/artifacts/5indefmm_31B647B5-FCEF-407C-B363-016976D682FD.mp4",
  video2: "https://customer-assets.emergentagent.com/job_wizardly-bouman-3/artifacts/ybw40crr_ScreenRecording_11-19-2025-13-34-45_1%202.mp4"
};

// Benefits data
const BENEFITS = [
  {
    icon: TrendingUp,
    title: "Hipertrofia Acelerada",
    description: "Ganho de massa muscular de alta qualidade com retenção mínima de líquidos"
  },
  {
    icon: Flame,
    title: "Força Explosiva",
    description: "Aumento significativo de força e potência para treinos mais intensos"
  },
  {
    icon: Activity,
    title: "Recuperação Rápida",
    description: "Síntese proteica otimizada para recuperação muscular acelerada"
  },
  {
    icon: Heart,
    title: "Libido Elevada",
    description: "Restauração dos níveis de testosterona e melhora da performance sexual"
  },
  {
    icon: Zap,
    title: "Energia & Vitalidade",
    description: "Disposição elevada durante todo o dia, dentro e fora da academia"
  },
  {
    icon: Shield,
    title: "Autoestima Renovada",
    description: "Transformação física que impacta positivamente sua confiança"
  }
];

// Other products data
const OTHER_PRODUCTS = [
  {
    name: "Primobolan",
    brand: "Landerlan",
    specs: "100mg - 10ml",
    price: 439,
    image: ASSETS.primobolan,
    description: "Ideal para ciclos de definição"
  },
  {
    name: "Masteron",
    brand: "Landerlan",
    specs: "100mg - 10ml",
    price: 329,
    image: ASSETS.masteron,
    description: "Perfeito para densidade muscular"
  },
  {
    name: "Enantato de Testosterona",
    brand: "Landerlan",
    specs: "250mg - 10ml",
    price: 329,
    image: ASSETS.enantato,
    description: "Base essencial para qualquer ciclo"
  }
];

// Countdown Timer Component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-3 justify-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="countdown-box rounded-lg p-3 min-w-[70px] text-center">
          <div className="text-2xl md:text-3xl font-bold text-red-500 font-mono">
            {String(value).padStart(2, '0')}
          </div>
          <div className="text-xs text-gray-400 uppercase tracking-wider">
            {unit === 'hours' ? 'Horas' : unit === 'minutes' ? 'Min' : 'Seg'}
          </div>
        </div>
      ))}
    </div>
  );
};

// Video Player Component with Lazy Loading
const VideoPlayer = ({ src, poster, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "100px" });

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative aspect-[9/16] max-w-[280px] mx-auto rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800"
    >
      {isInView && (
        <>
          <video
            ref={videoRef}
            src={src}
            preload="none"
            playsInline
            onLoadedData={() => setIsLoaded(true)}
            onEnded={() => setIsPlaying(false)}
            onClick={isPlaying ? handlePause : handlePlay}
            className="w-full h-full object-cover cursor-pointer"
            data-testid={`video-${title}`}
          />
          <AnimatePresence>
            {!isPlaying && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="video-play-overlay rounded-xl"
                onClick={handlePlay}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center red-glow"
                >
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

// Star Rating Component
const StarRating = ({ rating = 5 }) => (
  <div className="flex gap-1">
    {[...Array(rating)].map((_, i) => (
      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
    ))}
  </div>
);

// Section Title Component
const SectionTitle = ({ label, title, subtitle }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      {label && (
        <span className="text-red-500 font-mono text-sm tracking-widest uppercase mb-2 block">
          {label}
        </span>
      )}
      <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
        <span className="gold-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

// Hero Section
const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="hero-background min-h-screen flex items-center relative pt-20 pb-32 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <Badge className="bg-red-600/20 text-red-400 border-red-600/30 mb-4 text-sm">
              <Clock className="w-4 h-4 mr-2" />
              Oferta por tempo limitado
            </Badge>
            
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter mb-4">
              <span className="gold-text">SUSTANON</span>
              <br />
              <span className="text-white">DURATESTON</span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl mb-6 max-w-xl">
              Blend de 4 ésteres de testosterona para <span className="text-red-500 font-semibold">ganhos máximos</span> de massa muscular, força e libido.
            </p>

            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start mb-8">
              <div className="price-tag rounded-lg px-6 py-3">
                <span className="text-gray-400 text-sm line-through block">R$ 449,00</span>
                <span className="text-3xl md:text-4xl font-bold gold-text">R$ 329,00</span>
              </div>
              <div className="text-left">
                <Badge className="bg-green-600/20 text-green-400 border-green-600/30 mb-1">
                  <Truck className="w-3 h-3 mr-1" />
                  Frete Grátis
                </Badge>
                <p className="text-gray-500 text-sm">12x sem juros</p>
              </div>
            </div>

            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
              data-testid="hero-cta-button"
            >
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-6 px-10 text-lg rounded-none btn-skew red-glow animate-pulse-glow">
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  GARANTIR MINHA UNIDADE
                </span>
              </Button>
            </motion.a>

            <div className="mt-8">
              <p className="text-red-500 font-mono text-sm tracking-wider uppercase mb-3">
                Promoção encerra em:
              </p>
              <CountdownTimer />
            </div>
          </motion.div>

          {/* Right Content - Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-radial from-red-600/20 via-transparent to-transparent blur-3xl"></div>
            <img
              src={ASSETS.sustanon}
              alt="Sustanon - Durateston Muscle Labs"
              className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto product-glow"
              style={{ height: 'auto' }}
            />
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-red-600/20 blur-2xl rounded-full"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-red-500" />
      </motion.div>
    </section>
  );
};

// Benefits Section
const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#050505] to-[#0a0a0a] relative w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="A Ciência dos Gigantes"
          title="Benefícios Comprovados"
          subtitle="Sustanon combina 4 ésteres de testosterona para liberação gradual e resultados duradouros"
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
            >
              <Card className="benefit-card h-full bg-transparent border-neutral-800 hover:border-red-600/50">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center mb-4">
                    <benefit.icon className="w-7 h-7 text-red-500" />
                  </div>
                  <h3 className="font-heading text-xl font-bold uppercase text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Product composition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 bg-neutral-900/50 rounded-xl border border-neutral-800"
        >
          <h3 className="font-heading text-2xl font-bold uppercase text-center mb-6">
            <span className="gold-text">Composição Farmacológica</span>
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Testosterone Propionate", mg: "30mg" },
              { name: "Testosterone Phenylpropionate", mg: "60mg" },
              { name: "Testosterone Isocaproate", mg: "60mg" },
              { name: "Testosterone Decanoate", mg: "100mg" }
            ].map((compound, i) => (
              <div key={i} className="text-center p-4 bg-neutral-800/50 rounded-lg">
                <Beaker className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                <p className="text-white font-semibold text-sm">{compound.name}</p>
                <p className="text-red-500 font-mono font-bold">{compound.mg}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            Total: 250mg/ml - Frasco com 10ml
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Other Products Section
const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getWhatsAppLink = (productName) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Tenho interesse no ${productName}. Gostaria de mais informações.`;
  };

  return (
    <section className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Complete seu Stack"
          title="Outros Produtos"
          subtitle="Combine com outros compostos para potencializar seus resultados"
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid md:grid-cols-3 gap-8"
        >
          {OTHER_PRODUCTS.map((product, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
            >
              <Card className="product-card overflow-hidden h-full bg-transparent">
                <CardContent className="p-0">
                  <div className="relative aspect-square bg-black flex items-center justify-center p-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                    <Badge className="absolute top-4 right-4 bg-green-600/20 text-green-400 border-green-600/30">
                      Frete Grátis
                    </Badge>
                  </div>
                  <div className="p-6">
                    <p className="text-yellow-500 font-mono text-xs tracking-wider uppercase mb-1">
                      {product.brand}
                    </p>
                    <h3 className="font-heading text-2xl font-bold uppercase text-white mb-1">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-2">{product.specs}</p>
                    <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-bold gold-text">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="text-gray-500 text-sm">
                        12x de R$ {(product.price / 12).toFixed(2).replace('.', ',')}
                      </span>
                    </div>

                    <motion.a
                      href={getWhatsAppLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="block"
                      data-testid={`buy-${product.name.toLowerCase().replace(' ', '-')}`}
                    >
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-none btn-skew red-glow mb-3">
                        <span className="flex items-center justify-center gap-2">
                          <MessageCircle className="w-4 h-4" />
                          COMPRAR
                        </span>
                      </Button>
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* More offers button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="more-offers-button"
          >
            <Button variant="outline" className="border-yellow-600 text-yellow-500 hover:bg-yellow-600/10 font-bold py-4 px-8 rounded-none btn-skew">
              <span className="flex items-center gap-2">
                <Package className="w-5 h-5" />
                CONFERIR MAIS OFERTAS!
              </span>
            </Button>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

// Reviews Section
const ReviewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews-section" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Resultados Reais"
          title="O Que Dizem Nossos Clientes"
          subtitle="Veja os depoimentos de quem já transformou seu físico com nossos produtos"
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {/* Video 1 */}
          <div className="text-center">
            <VideoPlayer src={ASSETS.video1} title="review-1" />
            <div className="mt-4">
              <StarRating rating={5} />
              <p className="text-white font-semibold mt-2">Cliente Verificado</p>
              <p className="text-gray-500 text-sm">Resultados em 8 semanas</p>
            </div>
          </div>

          {/* Video 2 */}
          <div className="text-center">
            <VideoPlayer src={ASSETS.video2} title="review-2" />
            <div className="mt-4">
              <StarRating rating={5} />
              <p className="text-white font-semibold mt-2">Cliente Verificado</p>
              <p className="text-gray-500 text-sm">Antes e Depois</p>
            </div>
          </div>
        </motion.div>

        {/* Product packaging showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <div className="rounded-xl overflow-hidden border border-neutral-800">
            <img
              src={ASSETS.packaging}
              alt="Embalagem dos produtos"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="p-4 bg-neutral-900/80">
              <p className="text-white font-semibold">Embalagem Premium</p>
              <p className="text-gray-500 text-sm">Lacrada e com selo holográfico de autenticidade</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-neutral-800">
            <img
              src={ASSETS.shipping}
              alt="Envios realizados"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="p-4 bg-neutral-900/80">
              <p className="text-white font-semibold">Envios Diários</p>
              <p className="text-gray-500 text-sm">Milhares de clientes satisfeitos em todo Brasil</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Guarantee Section
const GuaranteeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const guarantees = [
    {
      icon: Shield,
      title: "Compra Segura",
      description: "Pagamento protegido via PIX ou cartão"
    },
    {
      icon: Truck,
      title: "Entrega Garantida",
      description: "Envio em 24h com rastreamento"
    },
    {
      icon: Award,
      title: "Produto Original",
      description: "Selo holográfico de autenticidade"
    },
    {
      icon: CreditCard,
      title: "Parcelamento",
      description: "Até 12x sem juros no cartão"
    }
  ];

  return (
    <section className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Sua Segurança"
          title="Garantias & Confiança"
          subtitle="Compre com tranquilidade - sua satisfação é nossa prioridade"
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {guarantees.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 0.4 }}
              className="trust-badge rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-green-600/20 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-heading text-lg font-bold uppercase text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Sponsor image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="rounded-xl overflow-hidden border border-neutral-800">
            <img
              src={ASSETS.sponsor}
              alt="Patrocinador Oficial"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            Patrocinadores oficiais de eventos fitness e bodybuilding
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Final CTA Section
const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#050505] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-red-600/10 via-transparent to-transparent"></div>
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <span className="text-red-500 font-mono text-sm tracking-widest uppercase mb-4 block">
          Não perca essa oportunidade
        </span>
        <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
          <span className="gold-text">Transforme</span>
          <br />
          <span className="text-white">Seu Físico Hoje</span>
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Sustanon - Durateston por apenas <span className="text-yellow-500 font-bold">R$ 329,00</span> com frete grátis para todo Brasil. Estoque limitado!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="final-cta-button"
          >
            <Button className="whatsapp-btn text-white font-bold py-6 px-10 text-lg rounded-full shadow-lg">
              <MessageCircle className="w-6 h-6 mr-2" />
              COMPRAR AGORA VIA WHATSAPP
            </Button>
          </motion.a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Frete Grátis
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            12x Sem Juros
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Envio em 24h
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Produto Original
          </span>
        </div>
      </motion.div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="py-12 bg-[#030303] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <a href={WEBSITE_LINK} target="_blank" rel="noopener noreferrer">
              <img
                src={ASSETS.logo}
                alt="Suplementos Mais Baratos"
                className="h-20 w-auto mb-4 hover:opacity-80 transition-opacity cursor-pointer"
              />
            </a>
            <p className="text-gray-500 text-sm text-center md:text-left">
              Os melhores suplementos pelo menor preço
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center">
            <p className="text-white font-semibold mb-4">Siga-nos</p>
            <div className="flex gap-4">
              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center"
                data-testid="footer-whatsapp"
              >
                <Phone className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500 flex items-center justify-center"
                data-testid="footer-instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                href={FACEBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center"
                data-testid="footer-facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </motion.a>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <p className="text-white font-semibold mb-2">Atendimento</p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 transition-colors"
            >
              (21) 97223-2170
            </a>
            <p className="text-gray-500 text-sm mt-1">
              Segunda a Sábado: 9h às 20h
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider my-8"></div>

        {/* Disclaimer */}
        <div className="text-center">
          <p className="text-gray-600 text-xs max-w-3xl mx-auto mb-4">
            <strong>AVISO:</strong> Este produto destina-se apenas a adultos maiores de 21 anos. 
            Consulte um médico antes de usar qualquer suplemento ou composto hormonal. 
            Os resultados podem variar de pessoa para pessoa. Este site não substitui 
            orientação médica profissional.
          </p>
          <p className="text-gray-700 text-xs">
            © {new Date().getFullYear()} Suplementos Mais Baratos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Floating WhatsApp Button - Safari iframe compatible
const FloatingWhatsApp = () => {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40"
      style={{ position: 'fixed' }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      data-testid="floating-whatsapp"
    >
      <motion.div 
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
      </motion.div>
    </motion.a>
  );
};

// Audio Player Component - Safari compatible
const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        setHasInteracted(true);
        audioRef.current.volume = 0.3;
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Autoplay blocked - common on mobile
        });
      }
    };

    document.addEventListener('click', handleFirstInteraction, { once: true });
    document.addEventListener('touchstart', handleFirstInteraction, { once: true });
    document.addEventListener('scroll', handleFirstInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('scroll', handleFirstInteraction);
    };
  }, [hasInteracted]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src={MUSIC_URL} loop preload="auto" />
      <motion.button
        onClick={toggleAudio}
        className="fixed bottom-6 left-6 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-900 border border-red-600/50 flex items-center justify-center shadow-lg hover:bg-neutral-800 transition-colors"
        style={{ position: 'fixed' }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
        data-testid="audio-toggle"
      >
        {isPlaying ? (
          <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
        ) : (
          <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
        )}
      </motion.button>
    </>
  );
};

// Header/Navbar - Safari iframe compatible
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToReviews = () => {
    const reviewsSection = document.getElementById('reviews-section');
    if (reviewsSection) {
      reviewsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        scrolled ? "bg-black/95 backdrop-blur-md py-2" : "bg-black/80 backdrop-blur-sm py-3 sm:py-4"
      }`}
      style={{ position: 'fixed' }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href={WEBSITE_LINK} target="_blank" rel="noopener noreferrer">
          <img
            src={ASSETS.logo}
            alt="Suplementos Mais Baratos"
            className="h-10 md:h-14 w-auto cursor-pointer hover:opacity-80 transition-opacity"
          />
        </a>
        
        <nav className="hidden lg:flex items-center gap-6">
          {/* Injetáveis Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-medium" data-testid="menu-injetaveis">
                <Syringe className="w-4 h-4 text-red-500" />
                Injetáveis
                <ChevronDown className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-neutral-900 border-neutral-800 min-w-[200px]">
              <DropdownMenuLabel className="text-red-500 font-mono text-xs">💉 Injetáveis Clássicos</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-neutral-800" />
              {INJECTABLE_PRODUCTS.map((product, index) => (
                <DropdownMenuItem key={index} asChild>
                  <a
                    href={getProductWhatsAppLink(product.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white hover:bg-neutral-800 cursor-pointer"
                  >
                    {product.name}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Orais Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-medium" data-testid="menu-orais">
                <Pill className="w-4 h-4 text-yellow-500" />
                Orais
                <ChevronDown className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-neutral-900 border-neutral-800 min-w-[200px]">
              <DropdownMenuLabel className="text-yellow-500 font-mono text-xs">💊 Orais</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-neutral-800" />
              {ORAL_PRODUCTS.map((product, index) => (
                <DropdownMenuItem key={index} asChild>
                  <a
                    href={getProductWhatsAppLink(product.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white hover:bg-neutral-800 cursor-pointer"
                  >
                    {product.name}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Avaliações Link */}
          <button
            onClick={scrollToReviews}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-medium"
            data-testid="menu-avaliacoes"
          >
            <MessageSquare className="w-4 h-4 text-green-500" />
            Avaliações
          </button>
        </nav>

        <div className="flex items-center gap-3">
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-2 text-gray-300 hover:text-white" data-testid="mobile-menu-trigger">
                  <Menu className="w-6 h-6" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-neutral-900 border-neutral-800 min-w-[250px] mr-4">
                <DropdownMenuLabel className="text-red-500 font-mono text-xs">💉 Injetáveis Clássicos</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-neutral-800" />
                {INJECTABLE_PRODUCTS.map((product, index) => (
                  <DropdownMenuItem key={index} asChild>
                    <a
                      href={getProductWhatsAppLink(product.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white hover:bg-neutral-800 cursor-pointer"
                    >
                      {product.name}
                    </a>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator className="bg-neutral-800" />
                <DropdownMenuLabel className="text-yellow-500 font-mono text-xs">💊 Orais</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-neutral-800" />
                {ORAL_PRODUCTS.map((product, index) => (
                  <DropdownMenuItem key={index} asChild>
                    <a
                      href={getProductWhatsAppLink(product.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white hover:bg-neutral-800 cursor-pointer"
                    >
                      {product.name}
                    </a>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator className="bg-neutral-800" />
                <DropdownMenuItem asChild>
                  <button
                    onClick={scrollToReviews}
                    className="text-green-400 hover:text-white hover:bg-neutral-800 cursor-pointer w-full text-left"
                  >
                    <MessageSquare className="w-4 h-4 mr-2 inline" />
                    Avaliações
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="header-cta-button"
          >
            <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-none btn-skew text-sm md:text-base">
              <span className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">COMPRAR</span>
              </span>
            </Button>
          </motion.a>
        </div>
      </div>
    </header>
  );
};

// Main App Component
function App() {
  return (
    <div className="App min-h-screen bg-[#050505]">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <ProductsSection />
        <ReviewsSection />
        <GuaranteeSection />
        <FinalCTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <AudioPlayer />
    </div>
  );
}

export default App;
