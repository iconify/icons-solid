import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k_ddi0biy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 12h.01m2.561-3.064a4 4 0 0 1 0 6.128m2.571-9.192a8 8 0 0 1 0 12.256M15.5 12H21m-3-3l3 3l-3 3");
}
</style><path class="k_ddi0biy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:sound-direction"} {...others} />);
}

export default Component;
