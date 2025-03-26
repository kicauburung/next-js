import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kicau Burung - Download Suara Burung Kicau Terbaik Untuk Masteran",
  description: "Koleksi lengkap suara kicau burung mp3 download gratis untuk masteran, lomba, terapi relaksasi, dan pancingan. Dapatkan suara burung gacor terpopuler di Indonesia.",
  keywords: "kicau burung terbaik, kicau burung mp3 download gratis, suara kicau burung untuk masteran, burung kicau untuk lomba, kicau burung juara nasional, kicau burung hutan asli, download suara kicau burung gacor, kicau burung buat pancingan, kicau burung untuk menenangkan pikiran, burung kicau terpopuler di Indonesia",
  openGraph: {
    title: "Kicau Burung - Download Suara Burung Kicau Terbaik Untuk Masteran",
    description: "Koleksi lengkap suara kicau burung mp3 download gratis untuk masteran, lomba, terapi relaksasi, dan pancingan. Dapatkan suara burung gacor terpopuler di Indonesia.",
    url: "https://kicauburung.my.id",
    siteName: "Kicau Burung",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kicau Burung - Suara Burung Kicau Terbaik",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="canonical" href="https://kicauburung.com" />
      </head>
      <body className={`${inter.className} bg-[#FEFAE0]`}>
        <Header />
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          {children}
        </div>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
