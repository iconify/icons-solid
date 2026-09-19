import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.htzw_wbgr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.163 15.837v6.662m-3-7.542a5.028 5.028 0 1 0 0 5.028v-2.514h-4.355m4.355 10.543a5.028 5.028 0 1 0 0 5.028v-2.514h-4.355");
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.loy81db2u {
  cx: 25.163px;
  cy: 12.757px;
  r: 0.7px;
  fill: currentColor;
}

.swwm40bhp {
  cx: 30.191px;
  cy: 30.529px;
  r: 5.029px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><rect class="j3s9ivbxi"/><circle class="loy81db2u"/><path class="htzw_wbgr"/><circle class="swwm40bhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:gigo"} {...others} />);
}

export default Component;
