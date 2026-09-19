import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.km005b6kn {
  cx: 7.5px;
  cy: 7.5px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.nw7_jr9em {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.365 13.172L24 24l-9.365-10.828H7.5V40.5h31");
}

.xzh_l5bfz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.635 34.703V24L24 34.703l9.365-10.828v10.828H40.5V7.5h-31");
}

.zefx0btwp {
  cx: 40.5px;
  cy: 40.5px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="km005b6kn"/><circle class="zefx0btwp"/><path class="nw7_jr9em"/><path class="xzh_l5bfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:magic-mirror-inside"} {...others} />);
}

export default Component;
