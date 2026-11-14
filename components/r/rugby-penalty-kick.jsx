import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a09-zi7hi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21a7 7 0 0 1 8-8a7 7 0 0 1-8 8M14 2.5V13m7-10.5V13m-7-4.5h7M6.25 17.75l1.5-1.5");
}
</style><path class="a09-zi7hi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:rugby-penalty-kick"} {...others} />);
}

export default Component;
