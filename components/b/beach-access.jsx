import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rrgzynemh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8.25a7.5 7.5 0 0 1 14.5 4Zm7.25 2L10 17m-7.5 0h19m-19 3.75q2.25-1.75 4.75 0q2.25 1.75 4.75 0q2.25-1.75 4.75 0q2.25 1.75 4.75 0");
}
</style><path class="rrgzynemh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:beach-access"} {...others} />);
}

export default Component;
