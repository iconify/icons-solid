import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bzh84tb8m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m18.173 23.999l-6.343 6.33l-6.33-6.33m24.34 0l6.489-6.33l6.171 6.33");
}

.i_v-wcbyk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.94 13.842c-5.62-3.781-13.24-2.292-17.02 3.327a12.26 12.26 0 0 0-2.09 6.83v6.33m5.403 3.827a12.13 12.13 0 0 0 6.847 2.092c6.765 0 12.249-5.484 12.249-12.249v-6.33");
}
</style><path class="i_v-wcbyk"/><path class="bzh84tb8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:emoji-anticlockwise-downwards-and-upwards-open-circle-arrows"} {...others} />);
}

export default Component;
