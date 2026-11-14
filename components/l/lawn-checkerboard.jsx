import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pbmx8bajr {
  fill: currentColor;
  d: path("M6.5 4.5H12v7H4.75Zm5.5 7h7.25l2.25 8H12Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ytycny5mn {
  d: path("M6.5 4.5h11l4 15h-19Z");
}
</style><g class="ulnmmdpxh"><path class="ytycny5mn"/><path class="pbmx8bajr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:lawn-checkerboard"} {...others} />);
}

export default Component;
