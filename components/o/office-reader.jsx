import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.b4hzekukw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M44.029 16.259L24.52 4.367L4.378 16.26l20.144 11.89Zm-33.306 3.763l-6.768 4.17l20.566 11.775L44.03 24.192l-6.465-3.947");
}

.ccnsmqbtl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M44.029 16.259L24.52 4.367L4.378 16.26l20.144 11.89Zm-33.306 3.763l-6.768 4.17l20.566 11.775L44.03 24.192l-6.465-3.947M11.012 28.08l-6.767 4.17L24.81 44.026L44.319 32.25l-6.465-3.947");
}
</style><path class="b4hzekukw"/><path class="ccnsmqbtl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:office-reader"} {...others} />);
}

export default Component;
