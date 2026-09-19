import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ghtz3ubwy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.579 32.062v-12.84c0-1.442 1.862-2.02 2.679-.83l4.371 6.364a2.234 2.234 0 0 0 3.683 0l4.371-6.365c.817-1.189 2.68-.611 2.68.832v7.385a6.07 6.07 0 0 0 6.068 6.069h0a6.07 6.07 0 0 0 6.069-6.069V24c0-12.328-10.376-22.233-22.872-21.457c-10.707.664-19.42 9.378-20.085 20.085C1.767 35.124 11.672 45.5 24 45.5");
}
</style><path class="ghtz3ubwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:omnivore"} {...others} />);
}

export default Component;
