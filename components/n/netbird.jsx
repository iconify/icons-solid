import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ircy-ibfy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.153 37.77h15.93L42.5 10.43s-7.968-.024-11.82 0s-5.46 2.787-6.784 4.762S11.153 37.77 11.153 37.77");
}

.u539pxbop {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.083 37.77L5.5 14.72s11.717-2.053 18.278.785s8.649 12.783 8.649 12.783z");
}
</style><path class="ircy-ibfy"/><path class="u539pxbop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:netbird"} {...others} />);
}

export default Component;
