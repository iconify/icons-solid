import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.x_ge3g8nw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.851 25.432c1.136-.616 1.136-2.246 0-2.862L11.112 6.4C8.942 5.22 6.3 6.79 6.3 9.261v29.478c0 2.47 2.643 4.04 4.813 2.86zM6.297 22.52l11.066 6.017m-2.026-10.471l19.531 10.62");
}
</style><path class="x_ge3g8nw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:au-short"} {...others} />);
}

export default Component;
