import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp_s6mb2i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3a5.5 5.5 0 1 0 4 8a4.5 4.5 0 0 1-4-8M2.5 20.5l19-6.5M18 12.5v-7M17.25 3h2.5A1.25 1.25 0 0 1 21 4.25a1.25 1.25 0 0 1-1.25 1.25h-2.5A1.25 1.25 0 0 1 16 4.25A1.25 1.25 0 0 1 17.25 3");
}
</style><path class="gp_s6mb2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:night-skiing"} {...others} />);
}

export default Component;
