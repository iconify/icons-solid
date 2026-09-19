import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.qkfjxubwk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.024 13.517l4.687-7.092l4.687 7.092l-4.687 7.091z");
}

.vee2y-d2d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m15.384 5.5l3.7 8.387h13.32L24.018 29.55l-6.784-11.1l-4.933 7.092L21.55 42.5h4.933l16.342-28.613L38.818 5.5z");
}
</style><path class="qkfjxubwk"/><path class="vee2y-d2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:fpt-iviec"} {...others} />);
}

export default Component;
