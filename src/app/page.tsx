"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroSplitAvatars from '@/components/sections/hero/HeroSplitAvatars';
import MediaSplitTabsAbout from '@/components/sections/about/MediaSplitTabsAbout';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import BlogCardThree from '@/components/sections/blog/BlogCardThree';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';

export default function UkraineInfoPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="mediumSizeExtraSmallSpacing"
      background="noise"
      cardStyle="gradient-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="solid"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Ukraine Information Hub"
          navItems={[
            { name: "Situation", id: "about" },
            { name: "Updates", id: "blog" },
            { name: "Resources", id: "faq" },
            { name: "Impact", id: "metric" },
            { name: "Support", id: "contact" }
          ]}
          button={{ text: "Get Involved", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitAvatars
          title="Ukraine War"
          description="Get factual information about the humanitarian crisis and what is happening in Ukraine right now"
          tag="Current Crisis"
          avatars={[
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766152804606-n71b1awh.jpg", alt: "Ukraine situation" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766152805764-tos1k7s0.jpg", alt: "Humanitarian crisis" }
          ]}
          avatarText="Stay informed on this ongoing crisis"
          buttons={[
            { text: "Learn More", href: "about" },
            { text: "Get Updates", href: "blog" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766152804606-n71b1awh.jpg"
          imageAlt="Current situation in Ukraine"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <MediaSplitTabsAbout
          title="Understanding the Situation"
          description="Comprehensive overview of key facts and background"
          tabs={[
            {
              id: "background",
              label: "Background",
              description: "The conflict between Ukraine and Russia began in 2014 with the annexation of Crimea and has escalated significantly since February 2022 with the full-scale invasion. Millions have been displaced, and the humanitarian situation remains critical."
            },
            {
              id: "humanitarian",
              label: "Humanitarian Impact",
              description: "Over 6 million people have been internally displaced. Civilians face ongoing threats, infrastructure destruction, and lack of essential services. Healthcare, water, and food security remain major concerns across affected regions."
            },
            {
              id: "international",
              label: "International Response",
              description: "Countries worldwide have imposed sanctions and provided military and humanitarian aid. International organizations are documenting alleged war crimes. Global solidarity movements support Ukrainian independence and self-determination."
            },
            {
              id: "current",
              label: "Current Status",
              description: "As of now, the conflict continues with active military operations, ongoing diplomatic efforts, and continued humanitarian needs. International attention and support remain vital for Ukraine's defense and civilian protection."
            }
          ]}
          imageSrc=""
          imageAlt="Humanitarian crisis in Ukraine"
          imagePosition="right"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="Impact Statistics"
          description="Key numbers reflecting the scale of the crisis"
          metrics={[
            { id: "1", value: "6M+", description: "Internally Displaced Persons" },
            { id: "2", value: "8M+", description: "Refugees Fled Country" },
            { id: "3", value: "100K+", description: "Estimated Deaths" },
            { id: "4", value: "$400B+", description: "Infrastructure Damage" }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardThree
          title="Latest Updates"
          description="Recent news and developments about the situation"
          blogs={[
            {
              id: "1",
              category: "Humanitarian",
              title: "Civilian Protection Efforts Continue",
              description: "International organizations are working to protect civilians and provide essential aid in affected regions.",
              imageSrc: "",
              imageAlt: "Humanitarian aid efforts"
            },
            {
              id: "2",
              category: "International",
              title: "Global Solidarity with Ukraine",
              description: "Countries worldwide continue diplomatic efforts and provide support for Ukraine's sovereignty and defense.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766153614622-k9lo67bq.jpg",
              imageAlt: "International support"
            },
            {
              id: "3",
              category: "Crisis",
              title: "Ongoing Infrastructure Recovery",
              description: "Reconstruction efforts begin as the international community pledges support for rebuilding Ukraine.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766152809260-c63tn6hd.jpg",
              imageAlt: "Recovery and reconstruction"
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Resources & Information"
          description="Find credible sources and ways to stay informed"
          faqs={[
            {
              id: "1",
              title: "Where can I find credible information about Ukraine?",
              content: "Reputable sources include BBC News, Reuters, Associated Press, and official Ukrainian government communications. International organizations like the UN and Red Cross provide humanitarian updates."
            },
            {
              id: "2",
              title: "How can I help Ukraine?",
              content: "You can donate to legitimate humanitarian organizations, support sanctions efforts, contact elected officials, or volunteer with organizations providing aid. Verify organizations through charity watchdogs before donating."
            },
            {
              id: "3",
              title: "What is the humanitarian situation?",
              content: "Millions face displacement, lack of food security, healthcare challenges, and unsafe living conditions. International aid organizations are providing emergency assistance, but needs remain substantial."
            },
            {
              id: "4",
              title: "How can I advocate for Ukraine?",
              content: "Contact government representatives, participate in peaceful demonstrations, share factual information, and support organizations working on diplomatic solutions and humanitarian aid."
            },
            {
              id: "5",
              title: "What are verified aid organizations?",
              content: "Established organizations include the Ukrainian Red Cross, World Food Programme, UNICEF, Doctors Without Borders, and UN agencies. Check organization registrations and financial transparency before donating."
            }
          ]}
          imageSrc=""
          imageAlt="Information resources"
          mediaPosition="left"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Involved"
          title="Stay Updated & Support"
          description="Sign up for updates on the situation in Ukraine and discover ways you can help support humanitarian efforts and promote peace."
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766152808169-80lkxy22.jpg"
          imageAlt="Support and action"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy and will only send you factual updates about the situation."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Ukraine Info Hub"
          columns={[
            {
              title: "Information",
              items: [
                { label: "Current Situation", href: "about" },
                { label: "Latest Updates", href: "blog" },
                { label: "Statistics", href: "metric" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "How to Help", href: "contact" },
                { label: "Resources", href: "faq" },
                { label: "Donate", href: "contact" }
              ]
            },
            {
              title: "Credible Sources",
              items: [
                { label: "UN Updates", href: "https://www.un.org" },
                { label: "Red Cross", href: "https://www.icrc.org" },
                { label: "BBC News", href: "https://www.bbc.com" }
              ]
            }
          ]}
          copyrightText="© 2024 Ukraine Information Hub. Dedicated to providing factual information about the situation in Ukraine."
        />
      </div>
    </ThemeProvider>
  );
}