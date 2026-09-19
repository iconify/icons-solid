import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.c2h-ij26t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.168 36.682l2.102-4.832V14.257h11.079c5.016 0 8.96 4.192 8.96 9.585c0 5.625-3.944 9.584-8.96 9.584h-7.351z");
}

.t-fcmxbon {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.5 5.5h-17a8 8 0 0 0-8 8v29h25c6.627 0 12-5.373 12-12v-13c0-6.627-5.373-12-12-12");
}
</style><path class="t-fcmxbon"/><path class="c2h-ij26t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:dito"} {...others} />);
}

export default Component;
