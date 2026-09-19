import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.u3q1ch_2r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16 23.6l8 8l8-8l9.95 19.9H32l-4-4l-4 4l-4-4l-4 4H6.09Z");
}

.vpmbmoawk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 26.78l-9.28-9.28h5.57v-13h7.42v13h5.57Z");
}
</style><path class="u3q1ch_2r"/><path class="vpmbmoawk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mitch"} {...others} />);
}

export default Component;
