import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aunk6sdsf {
  fill: currentColor;
  d: path("M7.288 13.713Q7 13.425 7 13t.288-.712T8 12t.713.288T9 13t-.288.713T8 14t-.712-.288m4 0Q11 13.426 11 13t.288-.712T12 12t.713.288T13 13t-.288.713T12 14t-.712-.288m4 0Q15 13.426 15 13t.288-.712T16 12t.713.288T17 13t-.288.713T16 14t-.712-.288M3 22V4h3V2h2v2h8V2h2v2h3v18zm2-2h14V10H5z");
}
</style><path class="aunk6sdsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:date-range-sharp"} {...others} />);
}

export default Component;
