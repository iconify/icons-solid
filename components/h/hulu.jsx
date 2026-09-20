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

.n7bj8jbuv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.064 22.027v5.009a3.036 3.036 0 1 0 6.072 0v-5.01m7.292.001v5.009a3.036 3.036 0 1 0 6.072 0v-5.01m-29-4.098v12.144m0-5.009a3.036 3.036 0 1 1 6.072 0v5.009m13.153-12.144v12.144");
}
</style><path class="n7bj8jbuv"/><path class="i9clfwm2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:hulu"} {...others} />);
}

export default Component;
