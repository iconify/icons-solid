import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.c_pdhbbbo {
  cx: 17px;
  cy: 15px;
  r: 1.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.h3x60llap {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17 5.5h14a9.5 9.5 0 0 1 0 19H17a9.5 9.5 0 0 1 0-19m-9.5 37V32c0-1.385 1.115-2.5 2.5-2.5h28c1.385 0 2.5 1.115 2.5 2.5v10.5z");
}

.y81jjhz3d {
  cx: 31px;
  cy: 15px;
  r: 1.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="h3x60llap"/><circle class="c_pdhbbbo"/><circle class="y81jjhz3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:oxproxion"} {...others} />);
}

export default Component;
