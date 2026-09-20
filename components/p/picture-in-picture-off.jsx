import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cbfw4639b {
  fill: currentColor;
  d: path("m20.45 23.3l-3.3-3.3H4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4l2 2H3.15L.65 3.5l1.425-1.425l19.8 19.8zm1.325-4.375L15.85 13h1.65q.625 0 1.063-.437T19 11.5v-3q0-.625-.437-1.062T17.5 7h-5q-.55 0-.95.338t-.525.837L6.85 4H20q.825 0 1.413.588T22 6v12q0 .25-.05.488t-.175.437");
}
</style><path class="cbfw4639b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:picture-in-picture-off"} {...others} />);
}

export default Component;
