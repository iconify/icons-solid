import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.atgi03bqv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.075 28.578L32.935 7H24");
}

.bakdjm70b {
  cx: 9px;
  cy: 30.5px;
  r: 3.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.lob53w-yd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.29 23.184L28.974 31.5h-16.62");
}

.pufz_nyzb {
  cx: 39px;
  cy: 30.5px;
  r: 3.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.pw2fqznxu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33 38.722a18 17 0 0 1-18 0");
}
</style><circle class="bakdjm70b"/><path class="pw2fqznxu"/><circle class="pufz_nyzb"/><path class="atgi03bqv"/><path class="lob53w-yd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:m365-tools"} {...others} />);
}

export default Component;
