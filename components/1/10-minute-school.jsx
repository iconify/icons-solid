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

.n7u4gibqn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.5 16.596l5.087-2.77v20.348M35.5 20.566v6.868a6.74 6.74 0 0 1-13.48 0v-6.868a6.74 6.74 0 0 1 6.74-6.74c2.065 0 3.914.93 5.15 2.392l-.005.004L28.76 24");
}
</style><path class="i9clfwm2k"/><path class="n7u4gibqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:10-minute-school"} {...others} />);
}

export default Component;
