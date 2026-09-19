import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.beqsa12ge {
  cx: 33.25px;
  cy: 14.75px;
  r: 9.25px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.njmjdq6ln {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.75 5.5A9.25 9.25 0 0 1 24 14.75v18.5a9.25 9.25 0 0 1-9.25 9.25h0a9.25 9.25 0 0 1-9.25-9.25v-18.5a9.25 9.25 0 0 1 9.25-9.25");
}

.oynlhd-_h {
  cx: 33.25px;
  cy: 33.25px;
  r: 9.25px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="njmjdq6ln"/><circle class="beqsa12ge"/><circle class="oynlhd-_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:batelco"} {...others} />);
}

export default Component;
