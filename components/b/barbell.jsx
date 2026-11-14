import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zxq7bib_r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 5zA1.25 1.25 0 0 1 5.5 6.25v11.5A1.25 1.25 0 0 1 4.25 19A1.25 1.25 0 0 1 3 17.75V6.25A1.25 1.25 0 0 1 4.25 5m2.5 0zA1.25 1.25 0 0 1 8 6.25v11.5A1.25 1.25 0 0 1 6.75 19a1.25 1.25 0 0 1-1.25-1.25V6.25A1.25 1.25 0 0 1 6.75 5M8 12h8m1.25-7za1.25 1.25 0 0 1 1.25 1.25v11.5A1.25 1.25 0 0 1 17.25 19A1.25 1.25 0 0 1 16 17.75V6.25A1.25 1.25 0 0 1 17.25 5m2.5 0zA1.25 1.25 0 0 1 21 6.25v11.5A1.25 1.25 0 0 1 19.75 19a1.25 1.25 0 0 1-1.25-1.25V6.25A1.25 1.25 0 0 1 19.75 5");
}
</style><path class="zxq7bib_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:barbell"} {...others} />);
}

export default Component;
