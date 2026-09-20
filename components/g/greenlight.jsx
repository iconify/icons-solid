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

.jsv8a57fo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.29 13.79v13.89a6.53 6.53 0 0 0 6.53 6.53h3.68M24.16 20.635c0-3.902-3.258-7.042-7.197-6.835c-3.694.194-6.463 3.516-6.463 7.222v6.343c0 3.78 3.058 6.845 6.83 6.845s6.83-3.065 6.83-6.845h-6.83");
}
</style><path class="i9clfwm2k"/><path class="jsv8a57fo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:greenlight"} {...others} />);
}

export default Component;
