import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.i00fn115b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.45 30.24L24 28.18h0l-13.45 2.06L24 4.5z");
}

.kt9bbdckf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.55 30.24L24 28.18h0l13.45 2.06L24 43.5zM24 4.5v39");
}
</style><path class="i00fn115b"/><path class="kt9bbdckf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:materialislands"} {...others} />);
}

export default Component;
