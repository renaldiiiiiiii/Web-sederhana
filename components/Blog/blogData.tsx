import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Honda civic turbo 2024",
    paragraph:
      "mobil ini disukai banyak orang namun harga masih di bilang tinggi",
    image: "/images/mobil/civic.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/mobil/alphard.jpg",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "alphard mobil untuk keluarga",
    paragraph:
      "mobil ini nyaman untuk di pakai yang memang keluarga nya banyak",
    image: "/images/mobil/alphard.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "mobil audi terbaru",
    paragraph:
      "mobil sport audi r8 ",
    image: "/images/mobil/audi.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
