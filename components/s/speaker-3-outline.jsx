import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i055xxbhj {
  fill: currentColor;
  d: path("M7 19h10q.425 0 .713-.288T18 18V5q0-.425-.288-.712T17 4H7q-.425 0-.712.288T6 5v13q0 .425.288.713T7 19m1 3v-1H7q-1.25 0-2.125-.875T4 18V5q0-1.25.875-2.125T7 2h10q1.25 0 2.125.875T20 5v13q0 1.25-.875 2.125T17 21h-1v1zm4-10.5");
}
</style><path class="i055xxbhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:speaker-3-outline"} {...others} />);
}

export default Component;
