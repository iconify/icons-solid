import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.v1ezxsa0j {
  width: 8px;
  height: 8px;
  x: 10px;
  y: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.5px;
  ry: 2.5px;
}

.xim15w3gg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 24.5v9c0 2.216 1.784 4 4 4h31c2.216 0 4-1.784 4-4v-19c0-2.216-1.784-4-4-4h-31c-2.216 0-4 1.784-4 4s1.784 4 4 4h35");
}
</style><path class="xim15w3gg"/><rect class="v1ezxsa0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:sell-pay"} {...others} />);
}

export default Component;
