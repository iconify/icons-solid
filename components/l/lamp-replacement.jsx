import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iv1ym1byx {
  d: path("M3.5 21.5h6m-3 0V7a4 4 0 0 1 4-4h3v3");
}

.tkt_2zb2d {
  d: path("M10.5 9a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm4.5 7.25h6m-1.75-1.75L21 16.25m0 3.5h-6m1.75 1.75L15 19.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iv1ym1byx"/><path class="tkt_2zb2d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:lamp-replacement"} {...others} />);
}

export default Component;
