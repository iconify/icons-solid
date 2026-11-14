import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b4q7ittqr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 3h7A3.5 3.5 0 0 1 20 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 6 17.5v-11A3.5 3.5 0 0 1 9.5 3M4 7.5h4M4 12h4m-4 4.5h4M11 8h5.5");
}
</style><path class="b4q7ittqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:notebook"} {...others} />);
}

export default Component;
