import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bqygr4y9d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 2.5H10c0 3.5 4 3.5 4 0h2.5c0 4 2 5 2 8C18.5 13 17 14 17 16l1.5 5.5h-5l-1.5-3l-1.5 3h-5L7 16c0-2-1.5-3-1.5-5.5c0-3 2-4 2-8M7 16h10");
}
</style><path class="bqygr4y9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:weightlifting-singlet"} {...others} />);
}

export default Component;
