import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.f7d_x-bal {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.835 19.835c.692-.576 1.438-.84 3.111-.835l.39.002a2.5 2.5 0 1 1 0 4.999m-1.922 0h1.921");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.xwvlh5wxi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.588 24a2.5 2.5 0 0 1 0 5h-4.125V19h4.125a2.5 2.5 0 0 1 0 5m0 0h-4.125m13.202 0a2.5 2.5 0 0 1 0 5H29.54V19h4.125a2.5 2.5 0 0 1 0 5m0 0H29.54m-17.704 4.157c.69.578 1.436.843 3.11.843h.39a2.5 2.5 0 1 0 0-4.999");
}
</style><path class="xwvlh5wxi"/><path class="f7d_x-bal"/><path class="i9clfwm2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:3bb"} {...others} />);
}

export default Component;
