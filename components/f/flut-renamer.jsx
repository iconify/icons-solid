import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dfzqigbnd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m38.168 14.849l-.141-3.064L33.56 5.99H13.742l-5.827 7.477m4.726 10.647l23.023.183l-.215 11.7l-22.67-.056zM24.506 22l3.5-.01m-3.569 15.744l3.5-.01m-1.748-15.615l.099 15.72m10.977-27.033H9.997M35.49 8.494h-23.7");
}

.rv8nmjg8g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.545 41.847L5.5 16.73l37 .044l-2.294 25.236zm.519-25.619l-.149-2.761l11.854-.05l1.578 1.604l16.82-.172l1.578 1.75");
}
</style><path class="rv8nmjg8g"/><path class="dfzqigbnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:flut-renamer"} {...others} />);
}

export default Component;
