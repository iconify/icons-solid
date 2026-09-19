import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.g5n83rb2y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 17h17.58l5.7 6.25v9.64H8.5v2.61l-3-2.79z");
}

.j9bgh9lpp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.32 24.08a1.78 1.78 0 0 0-1.11 2.37c.16.427.47.782.87 1q-.21 1.41-.6 2.78h2.56a16.7 16.7 0 0 0-.58-2.72a2.06 2.06 0 0 0 1-1.62a1.74 1.74 0 0 0-2.14-1.81");
}

.pb9w-ioox {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.5 32.89v5.61c0 2.2 1.8 4 4 4h26c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4h-26c-2.2 0-4 1.8-4 4V17");
}
</style><path class="j9bgh9lpp"/><path class="g5n83rb2y"/><path class="pb9w-ioox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:selfprivacy"} {...others} />);
}

export default Component;
