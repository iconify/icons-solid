import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vpgakbcdq {
  fill: currentColor;
  d: path("M10.5 13H8v-3h2.5V7.5h3V10H16v3h-2.5v2.5h-3zM12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91c4.59-1.15 8-5.86 8-10.91V5z");
}
</style><path class="vpgakbcdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-health-and-safety"} {...others} />);
}

export default Component;
