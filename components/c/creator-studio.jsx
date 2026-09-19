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

.v-psv3ayl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m13.005 5.5l3.669 5.629l-3.669 5.628M22.551 5.5l3.669 5.629l-3.669 5.628M32.097 5.5l3.669 5.629l-3.669 5.628m-26.597 0h36.999M29.517 28.248l-7.382-4.262a1.27 1.27 0 0 0-1.906 1.1v8.524a1.27 1.27 0 0 0 1.906 1.1l7.382-4.262a1.27 1.27 0 0 0 0-2.2");
}
</style><path class="v-psv3ayl"/><path class="i9clfwm2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:creator-studio"} {...others} />);
}

export default Component;
