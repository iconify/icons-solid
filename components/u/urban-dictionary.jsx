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

.or9xnv4xd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.513 23.575a4.5 4.5 0 0 0-4.5-4.5h0a4.5 4.5 0 0 0-4.5 4.5V26.5a4.5 4.5 0 0 0 4.5 4.5h0a4.5 4.5 0 0 0 4.5-4.5m1.8 4.5a1.8 1.8 0 0 1-1.8-1.8V13M22.041 26.5a4.5 4.5 0 0 1-4.5 4.5h0a4.5 4.5 0 0 1-4.5-4.5v-7.425M23.841 31a1.8 1.8 0 0 1-1.8-1.8V19.075m-9 0h-1.354m10.354 0h-1.354M34.513 13h-1.354");
}
</style><path class="i9clfwm2k"/><path class="or9xnv4xd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:urban-dictionary"} {...others} />);
}

export default Component;
