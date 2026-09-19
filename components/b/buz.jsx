import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j3s9ivbxi {
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

.jn-46of9g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.029 29.638v4.834a2.93 2.93 0 0 0 2.93 2.93h0a2.93 2.93 0 0 0 2.93-2.93v-4.835m0 4.835v2.93m3.251-7.765H37l-5.86 7.765H37m-21.165-5.86a2.93 2.93 0 1 1 0 5.86H11v-11.72h4.835a2.93 2.93 0 1 1 0 5.86m0 0H11");
}

.rhnt92bta {
  cx: 34.07px;
  cy: 24.705px;
  r: 2.11px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><rect class="j3s9ivbxi"/><circle class="rhnt92bta"/><path class="jn-46of9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:buz"} {...others} />);
}

export default Component;
