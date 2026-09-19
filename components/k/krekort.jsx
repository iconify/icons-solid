import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.qqwfmrkwm {
  cx: 24px;
  cy: 24px;
  r: 19.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.tq3d3lblt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.5 30.729V16.902h2.217a6.913 6.913 0 0 1 0 13.825Zm11.663-13.461v13.825m7.337.002l-5.627-6.913L33.5 17.27m-5.631 6.91h-1.706");
}
</style><circle class="qqwfmrkwm"/><path class="tq3d3lblt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:krekort"} {...others} />);
}

export default Component;
