import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.yrigdibny {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.5 30.628c1.1.923 2.169 1.345 4.838 1.345h.459a4.47 4.47 0 1 0 0-8.941H13.5v-7.006h9.767m10.71 11.244a3.987 3.987 0 0 1-7.45-1.975v-2.59a3.987 3.987 0 1 1 7.973 0V24h-7.973");
}
</style><path class="i9clfwm2k"/><path class="yrigdibny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:5e-tools"} {...others} />);
}

export default Component;
