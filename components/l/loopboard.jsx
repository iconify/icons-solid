import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.rlk4o-xsp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m28.701 5.68l-6.82 6.82l6.82 6.82");
}

.wvk73cp0r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.72 12.5H16A11.5 11.5 0 0 0 4.5 24A11.5 11.5 0 0 0 16 35.5h16A11.5 11.5 0 0 0 43.5 24A11.5 11.5 0 0 0 32 12.5H21.881");
}
</style><path class="wvk73cp0r"/><path class="rlk4o-xsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:loopboard"} {...others} />);
}

export default Component;
