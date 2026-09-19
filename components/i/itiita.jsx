import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.c2xrbabwq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 19.6v18.9a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4z");
}

.cms41f5jo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.971 21.452v9.73M23.967 17.49v11.29a2.4 2.4 0 0 0 2.402 2.402h.72m-5.644-9.73h5.044");
}

.l4ojjqb6j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.029 21.452v9.73");
}

.ohm2a_m5v {
  cx: 17.029px;
  cy: 17.568px;
  r: 0.75px;
  fill: currentColor;
}

.z7_4v7brk {
  cx: 30.971px;
  cy: 17.568px;
  r: 0.75px;
  fill: currentColor;
}
</style><path class="c2xrbabwq"/><circle class="ohm2a_m5v"/><path class="l4ojjqb6j"/><circle class="z7_4v7brk"/><path class="cms41f5jo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:itiita"} {...others} />);
}

export default Component;
