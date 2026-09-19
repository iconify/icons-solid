import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.b5r0tjk1y {
  cx: 16.25px;
  cy: 31.75px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.l65bg-aqj {
  cx: 31.75px;
  cy: 16.25px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.t_zf6go6y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 8.5v31M39.5 24h-31m-3-18.5l3 3V24m34-18.5l-3 3H24m18.5 34l-3-3V24m-34 18.5l3-3H24");
}

.xqn_semul {
  cx: 31.75px;
  cy: 31.75px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ys493ipbe {
  cx: 16.25px;
  cy: 16.25px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="t_zf6go6y"/><circle class="b5r0tjk1y"/><circle class="ys493ipbe"/><circle class="xqn_semul"/><circle class="l65bg-aqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:hindu-calendar"} {...others} />);
}

export default Component;
