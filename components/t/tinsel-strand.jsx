import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wvoodyb6q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8L4 13l1.5-3.5l1.5 5L8.75 11l1.5 4.75L12 12l1.75 3.75l1.5-4.75L17 14.5l1.5-5L20 13l1.5-5");
}
</style><path class="wvoodyb6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:tinsel-strand"} {...others} />);
}

export default Component;
