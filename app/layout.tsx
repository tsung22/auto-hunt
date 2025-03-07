import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Auto Hunt",
  description: "Online car sales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` bg-[#EBF2F7] antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
