import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oteh2267x {
  fill: currentColor;
  d: path("M9.713 17.713Q10 17.425 10 17t-.288-.712T9 16t-.712.288T8 17t.288.713T9 18t.713-.288m3 0Q13 17.426 13 17t-.288-.712T12 16t-.712.288T11 17t.288.713T12 18t.713-.288m3 0Q16 17.426 16 17t-.288-.712T15 16t-.712.288T14 17t.288.713T15 18t.713-.288m-6-3Q10 14.425 10 14t-.288-.712T9 13t-.712.288T8 14t.288.713T9 15t.713-.288m3 0Q13 14.426 13 14t-.288-.712T12 13t-.712.288T11 14t.288.713T12 15t.713-.288m3 0Q16 14.426 16 14t-.288-.712T15 13t-.712.288T14 14t.288.713T15 15t.713-.288M7 12h10v-1q0-2.075-1.463-3.537T12 6T8.463 7.463T7 11zM2 22V2h20v20z");
}
</style><path class="oteh2267x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bathroom-sharp"} {...others} />);
}

export default Component;
