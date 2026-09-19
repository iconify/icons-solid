import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bg-jjcb7q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m21.438 14.094l4.402 1.756l3.734-2.32l4.2 2.372l3.056-3.234");
}

.k6mosu51y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5c8.784 0 17.319 11.402 17.319 21.75A17.264 17.264 0 0 1 24 43.5m0-39c-8.784 0-17.319 11.402-17.319 21.75A17.264 17.264 0 0 0 24 43.5");
}
</style><path class="bg-jjcb7q"/><path class="k6mosu51y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:replika"} {...others} />);
}

export default Component;
