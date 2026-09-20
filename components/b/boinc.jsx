import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j5c5phb-q {
  cx: 24px;
  cy: 24px;
  r: 8.57px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ne-jl5b8b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 5.5l7.33 7.33m19.59-2.19a15.81 15.81 0 0 0-19.59 2.19m24.53 19.59a15.81 15.81 0 0 0-2.19-19.59L42.5 5.5M15.58 37.36a15.81 15.81 0 0 0 19.59-2.19l7.33 7.33M10.64 15.58a15.81 15.81 0 0 0 2.19 19.59L5.5 42.5");
}
</style><circle class="j5c5phb-q"/><path class="ne-jl5b8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:boinc"} {...others} />);
}

export default Component;
