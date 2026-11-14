import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rwdwm5bty {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3v15.5M20 3v15.5M5.5 4.5h13A1.5 1.5 0 0 1 20 6v1.5A1.5 1.5 0 0 1 18.5 9h-13A1.5 1.5 0 0 1 4 7.5V6a1.5 1.5 0 0 1 1.5-1.5m-3 17h19");
}
</style><path class="rwdwm5bty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ski-finish-arch"} {...others} />);
}

export default Component;
