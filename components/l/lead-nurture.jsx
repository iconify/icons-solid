import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lya9_m8tb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21V11M7 21h10m-5-8c0-3.5-2.5-6-7-6c0 3.5 2.5 6 7 6m0-2c0-4.5 3-7 8-7c0 4.5-3 7-8 7");
}
</style><path class="lya9_m8tb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lead-nurture"} {...others} />);
}

export default Component;
