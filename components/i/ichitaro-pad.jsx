import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fhs8tj_sz {
  cx: 24px;
  cy: 12.438px;
  r: 1.812px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.iiqxfi0up {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.5v5.126M14.75 5.5v5.126M33.25 5.5v5.126");
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

.kpjzoq2dq {
  cx: 14.75px;
  cy: 12.438px;
  r: 1.812px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.x7sv9egox {
  cx: 33.25px;
  cy: 12.438px;
  r: 1.812px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xon4v-xok {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 21.688h23.125v4.625H5.5z");
}
</style><rect class="j3s9ivbxi"/><path class="xon4v-xok"/><circle class="fhs8tj_sz"/><circle class="x7sv9egox"/><circle class="kpjzoq2dq"/><path class="iiqxfi0up"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ichitaro-pad"} {...others} />);
}

export default Component;
