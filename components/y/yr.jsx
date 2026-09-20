import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.a-87zljyf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.425 30.85v-13.7h4.484c2.536 0 4.591 2.06 4.591 4.601s-2.055 4.6-4.59 4.6h-4.485m4.484.001l4.485 4.494M21.35 23.4v4.025a3.425 3.425 0 0 1-3.425 3.424");
}

.anzy_pbea {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.35 17.15v6.25a3.425 3.425 0 1 1-6.85 0v-6.25");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}
</style><path class="i9clfwm2k"/><path class="a-87zljyf"/><path class="anzy_pbea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:yr"} {...others} />);
}

export default Component;
