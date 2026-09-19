import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.mbsy3tbth {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.753 5.565L42.5 42.398l-11.303.037l-1.915-7.252H18.718l-1.915 7.252L5.5 42.398L17.247 5.565z");
}

.pbzmbh85w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.376 27.27L24 14.588L20.624 27.27z");
}
</style><path class="mbsy3tbth"/><path class="pbzmbh85w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:annas-archive"} {...others} />);
}

export default Component;
