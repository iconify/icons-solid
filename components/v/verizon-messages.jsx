import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ada4hwb1v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.17 31.166v1.894c0 1.76-1.42 3.18-3.17 3.18h-4.08l-6.35 2.95v-2.95h-1.9c-1.75 0-3.17-1.42-3.17-3.18v-8.72c0-1.75 1.42-3.17 3.17-3.17h5.92");
}

.cts2d6cvv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38 8.81H19.266a4.5 4.5 0 0 0-4.5 4.5v13.244a4.5 4.5 0 0 0 4.5 4.5h6.287l9.553 4.325v-4.324H38a4.5 4.5 0 0 0 4.5-4.5V13.31a4.5 4.5 0 0 0-4.5-4.5");
}
</style><path class="cts2d6cvv"/><path class="ada4hwb1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:verizon-messages"} {...others} />);
}

export default Component;
