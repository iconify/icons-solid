import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fmiyufzhm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14 19.121l8.308 8.166L34 15.723");
}

.ki76r6_xg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.203 39.203c-8.396 8.396-22.01 8.396-30.406 0s-8.396-22.01 0-30.406m30.406 0c-8.397-8.396-22.01-8.396-30.406 0m30.406 30.406");
}
</style><path class="fmiyufzhm"/><path class="ki76r6_xg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:cashify"} {...others} />);
}

export default Component;
