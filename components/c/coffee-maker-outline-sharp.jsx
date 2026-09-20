import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m6akav83o {
  fill: currentColor;
  d: path("M4 22V2h16v2h-2v3H8V4H6v16h4.05q-.95-.675-1.5-1.713T8 16v-5h10v5q0 1.25-.55 2.288T15.95 20H20v2zm9-3q1.25 0 2.125-.875T16 16v-3h-6v3q0 1.25.875 2.125T13 19m.713-9.287Q14 9.425 14 9t-.288-.712T13 8t-.712.288T12 9t.288.713T13 10t.713-.288M13 13");
}
</style><path class="m6akav83o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:coffee-maker-outline-sharp"} {...others} />);
}

export default Component;
