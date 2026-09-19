import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cinmmvj8l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 42.5v-37h24.666m.001 24.667H17.834V42.5");
}

.n6x1xfb0v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.166 42.5h6.167a6.167 6.167 0 0 0 6.167-6.167V24a6.167 6.167 0 0 0-6.167-6.166h-18.5");
}
</style><path class="n6x1xfb0v"/><path class="cinmmvj8l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:first-due"} {...others} />);
}

export default Component;
