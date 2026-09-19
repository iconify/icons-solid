import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.s8_r54cyv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m21.32 20.648l-1.601-1.911h0a8.613 8.613 0 1 0 0 10.527h0l8.816-10.527h0a8.615 8.615 0 0 1 14.754 1.91");
}

.tzkw48kgf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m26.935 27.353l1.6 1.91h0a8.615 8.615 0 0 0 14.735-1.868");
}
</style><path class="s8_r54cyv"/><path class="tzkw48kgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:swapcard"} {...others} />);
}

export default Component;
