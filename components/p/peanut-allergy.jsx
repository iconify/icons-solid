import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t_-cu2bnp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4c2.75 0 4 2 4 3.75c0 1.25-1.25 2-1.5 2.75c.25.75 1.5 1.5 1.5 2.75C14 15 12.75 17 10 17s-4-2-4-3.75c0-1.25 1.25-2 1.5-2.75C7.25 9.75 6 9 6 7.75C6 6 7.25 4 10 4Zm4.75 17L18 15l3.25 6Z");
}
</style><path class="t_-cu2bnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:peanut-allergy"} {...others} />);
}

export default Component;
