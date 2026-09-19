import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cfq9kh__b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5C13.249 4.5 4.5 13.249 4.5 24S13.249 43.5 24 43.5S43.5 34.751 43.5 24V4.5z");
}

.hzwa77b_s {
  cx: 24px;
  cy: 24px;
  r: 13.703px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="cfq9kh__b"/><circle class="hzwa77b_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:dexcom-g6"} {...others} />);
}

export default Component;
