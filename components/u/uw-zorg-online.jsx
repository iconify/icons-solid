import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.h0j8b3tmd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.5 18H30v-6.5c0-3.3-2.7-6-6-6s-6 2.7-6 6V18h-6.5c-3.3 0-6 2.7-6 6h0c0 3.3 2.7 6 6 6H18v6.5c0 3.3 2.7 6 6 6s6-2.7 6-6V30h6.5c3.3 0 6-2.7 6-6h0c0-3.3-2.7-6-6-6");
}

.tlsbkt65n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30 18c-6.627 0-12 5.373-12 12");
}
</style><path class="h0j8b3tmd"/><path class="tlsbkt65n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:uw-zorg-online"} {...others} />);
}

export default Component;
