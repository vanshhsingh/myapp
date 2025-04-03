import { Link } from "wouter";

const Hero = () => {
  return (
    <section className="relative bg-secondary overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')" }}
          aria-hidden="true"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-24 md:py-28 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Find Your Dream Property with Expert Guidance
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Professional advisory services and property management solutions tailored to your needs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/properties" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-700">
              View Properties
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:bg-opacity-10">
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
