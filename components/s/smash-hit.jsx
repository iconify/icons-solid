import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.wd3-wrbbz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m31.553 15.332l2.249-2.582m-6.081-7.866L26.19 12.75m-9.959-8.8l3.615 9.329M4.883 14.71l8.777 4.265M9.094 33.206l5.125-3.165m2.9 14.331l3.201-9.476m24.117-4.208l-9.505-3.111m9.646-9.82l-9.572 2.904m-9.847 18.432l-.273-3.551m12.049 2.963l-5.284-5.925M12.51 24.389l-7.01.237");
}

.x18rz_cgq {
  cx: 24px;
  cy: 24px;
  r: 11.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="x18rz_cgq"/><path class="wd3-wrbbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:smash-hit"} {...others} />);
}

export default Component;
