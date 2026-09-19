import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cl53k1bhf {
  cx: 24.062px;
  cy: 7.948px;
  r: 0.75px;
  fill: currentColor;
}

.m56wr_5wd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 40.802c9.81-5.278 17.026-12.683 18.5-25.16c1.474 12.477 8.69 19.882 18.5 25.16");
}
</style><path class="m56wr_5wd"/><circle class="cl53k1bhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:myaakash"} {...others} />);
}

export default Component;
