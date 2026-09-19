import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.zfkjpoe8g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.5 16.758h5v5h-5zm0 2.5h5m-2.5-2.5v5M5.5 33.517a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4m-37-4.826a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4");
}
</style><path class="i9clfwm2k"/><path class="zfkjpoe8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:microsoft-surface"} {...others} />);
}

export default Component;
