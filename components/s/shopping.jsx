import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.wypt4abus {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.41 19.03L25.56 8.672a1.87 1.87 0 0 0-3.12 0L15.59 19.03");
}

.ybwxp8b_n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.35 40.166h-24.7a2.78 2.78 0 0 1-2.676-2.028l-4.37-15.579a2.78 2.78 0 0 1 2.677-3.53H40.72a2.78 2.78 0 0 1 2.675 3.53l-4.369 15.579a2.78 2.78 0 0 1-2.675 2.028Z");
}
</style><path class="ybwxp8b_n"/><path class="wypt4abus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:shopping"} {...others} />);
}

export default Component;
