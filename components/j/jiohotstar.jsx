import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.p8ql7obxf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m21.834 17.238l3.22-10.01l.936 11.064L42.5 7.462L29.035 22.506L38.109 30l-12.06-2.986l-5.445 13.759l.176-13.232l-10.42 2.635l7.259-6.03L5.5 18.116l12.997 1.288l-3.044-6.147z");
}
</style><path class="p8ql7obxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:jiohotstar"} {...others} />);
}

export default Component;
