import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.p8-_1ovuv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.014 12.734A13 13 0 0 1 30.5 11a13 13 0 0 1 13 13a13 13 0 0 1-13 13a13 13 0 0 1-6.513-1.75");
}

.w8nozx66d {
  cx: 17.5px;
  cy: 24px;
  r: 13px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="p8-_1ovuv"/><circle class="w8nozx66d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:askbae"} {...others} />);
}

export default Component;
