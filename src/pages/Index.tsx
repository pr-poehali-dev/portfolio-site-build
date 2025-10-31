import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const skills = [
    { name: "Linux", level: 75, icon: "Terminal" },
    { name: "Windows Server", level: 70, icon: "Server" },
    { name: "Сети", level: 80, icon: "Network" },
    { name: "Виртуализация", level: 65, icon: "Box" },
    { name: "Bash", level: 60, icon: "Code" },
    { name: "Python", level: 55, icon: "FileCode" }
  ];

  const projects = [
    {
      title: "Домашняя лаборатория",
      description: "Развертывание собственного сервера с виртуализацией для изучения сетевых технологий",
      tags: ["VirtualBox", "Ubuntu", "DNS"]
    },
    {
      title: "Автоматизация бэкапов",
      description: "Скрипт для автоматического резервного копирования важных файлов",
      tags: ["Bash", "Cron", "rsync"]
    },
    {
      title: "Мониторинг сети",
      description: "Настройка системы мониторинга домашней сети с оповещениями",
      tags: ["Python", "SNMP", "Grafana"]
    }
  ];

  const achievements = [
    { icon: "Award", text: "Сертификат Cisco CCNA (в процессе)" },
    { icon: "BookOpen", text: "Изучил основы кибербезопасности" },
    { icon: "Users", text: "Участник IT-клуба университета" },
    { icon: "Trophy", text: "Призёр хакатона по сетевым технологиям" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Спасибо за сообщение! Я свяжусь с вами в ближайшее время.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="mb-6">
              <Badge variant="outline" className="text-sm px-4 py-2">
                <Icon name="GraduationCap" size={16} className="mr-2" />
                Студент 3 курса
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Сетевое администрирование
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Изучаю серверные технологии, сети и автоматизацию. Готов применять знания на практике и расти как специалист.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="group" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Связаться со мной
                <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                <Icon name="FolderOpen" size={20} className="mr-2" />
                Мои проекты
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
        </div>
      </section>

      <section className="py-20 bg-card" id="about">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Обо мне</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://cdn.poehali.dev/projects/dd46d868-2322-490b-b578-5d8753b51c85/files/813e1690-77c3-46e8-8b17-84b4d6d4d5f7.jpg" 
                    alt="Рабочее пространство" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3 flex items-center">
                    <Icon name="User" size={24} className="mr-2 text-primary" />
                    Привет!
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Я студент третьего курса, специализируюсь на сетевом администрировании. 
                    Хотя у меня пока нет коммерческого опыта, я активно изучаю серверные технологии, 
                    настраиваю собственную лабораторию и постоянно развиваюсь в IT-сфере.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Icon name="Target" size={20} className="mr-2 text-primary" />
                    Мои интересы:
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <Icon name="Check" size={18} className="mr-2 text-primary mt-0.5 flex-shrink-0" />
                      <span>Построение и настройка компьютерных сетей</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={18} className="mr-2 text-primary mt-0.5 flex-shrink-0" />
                      <span>Администрирование Linux и Windows серверов</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={18} className="mr-2 text-primary mt-0.5 flex-shrink-0" />
                      <span>Автоматизация рутинных задач</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={18} className="mr-2 text-primary mt-0.5 flex-shrink-0" />
                      <span>Основы информационной безопасности</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" id="skills">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Навыки</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
              <p className="text-muted-foreground mt-4">Технологии и инструменты, с которыми я работаю</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg flex items-center">
                        <Icon name={skill.icon as any} size={20} className="mr-2 text-primary" />
                        {skill.name}
                      </CardTitle>
                      <span className="text-sm font-semibold text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" id="projects">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Проекты</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
              <p className="text-muted-foreground mt-4">Учебные проекты и практические работы</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="FolderGit2" size={24} className="text-primary" />
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="mt-2">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" id="achievements">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Достижения</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name={achievement.icon as any} size={24} className="text-primary" />
                      </div>
                      <p className="text-lg">{achievement.text}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Контакты</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
              <p className="text-muted-foreground mt-4">Свяжитесь со мной для обсуждения возможностей сотрудничества</p>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Ваше имя
                    </label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Сообщение
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите, чем я могу быть полезен..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
                
                <div className="mt-8 pt-8 border-t">
                  <div className="flex justify-center space-x-6">
                    <Button variant="ghost" size="icon" className="hover:text-primary">
                      <Icon name="Mail" size={24} />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:text-primary">
                      <Icon name="Github" size={24} />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:text-primary">
                      <Icon name="Linkedin" size={24} />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:text-primary">
                      <Icon name="MessageCircle" size={24} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-card border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Портфолио. Создано с использованием современных технологий.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
