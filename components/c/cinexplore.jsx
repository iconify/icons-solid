import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.rvqk0klmr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.907 30.149L7.1 10.631m-.007 26.698l33.814-19.522M17.871 4.5v38.997m23.447-14.884v-9.27a3.07 3.07 0 0 0-1.536-2.66L19.395 4.912a3.07 3.07 0 0 0-3.054-.01L8.236 9.505a3.07 3.07 0 0 0-1.554 2.672v23.614a3.07 3.07 0 0 0 1.536 2.661l8.028 4.635a3.07 3.07 0 0 0 3.073 0l20.463-11.814a3.07 3.07 0 0 0 1.536-2.66");
}
</style><path class="rvqk0klmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:cinexplore"} {...others} />);
}

export default Component;
