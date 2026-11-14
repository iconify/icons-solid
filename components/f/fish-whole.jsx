import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c343gf1lq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12c2.5-4.5 6-6 9.5-6S18 9 18 12s-2 6-5.5 6s-7-1.5-9.5-6Zm15 0l3.5-3.5v7ZM7.5 11h.01");
}
</style><path class="c343gf1lq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:fish-whole"} {...others} />);
}

export default Component;
