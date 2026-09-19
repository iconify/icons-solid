import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fwc7d6bpm {
  cx: 19.523px;
  cy: 38.1px;
  r: 3.204px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.m63es2yjm {
  cx: 39.296px;
  cy: 38.1px;
  r: 3.204px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z275it1bd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 12.875h10.819v16.812H42.5v-7.322m0-15.67L26.855 22.277M42.5 13.638V6.695h-6.942");
}
</style><circle class="m63es2yjm"/><path class="z275it1bd"/><circle class="fwc7d6bpm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:share-a-cart"} {...others} />);
}

export default Component;
