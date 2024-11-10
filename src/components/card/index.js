export default function Card({ data, label, icon, className }) {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2">
        {icon}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className={className}> {/* Додано className тут */}
          <h4 className="text-title-md font-bold text-black">{data}</h4>
          <span className="text-sm font-medium text-black">{label}</span> {/* Додано text-black для тексту */}
        </div>
      </div>
    </div>
  );
}
