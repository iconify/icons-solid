import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i26im4b7i {
  fill: currentColor;
  d: path("M2 20V4h20v2H11v3H6v2h5v2H6v2h5q0 1.425.563 2.725T13.15 20zm15 3v-3.1q-1.75-.35-2.875-1.725T13 15V8h10v7q0 1.8-1.125 3.175T19 19.9V21h3v2zm2.75-9H21v-4h-6v2h.75q.825 0 1.563.375T18.55 13.4q.2.3.525.45t.675.15");
}
</style><path class="i26im4b7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:fluid-balance-sharp"} {...others} />);
}

export default Component;
