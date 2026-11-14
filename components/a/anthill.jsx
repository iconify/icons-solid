import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d2b17smuf {
  d: path("M2.5 19c2.5-6 6-7.5 9.5-7.5s7 1.5 9.5 7.5Z");
}

.fp4xjtm1d {
  d: path("M9.75 19v-2a2.25 2.25 0 0 1 4.5 0v2M8.75 8.5a1.75 1.5 0 1 1 3.5 0a1.75 1.5 0 1 1-3.5 0Zm3.5-.5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 1 1-2.5 0Zm0 1.25L10.5 11.5m1.75-2.25l1.5 2.25m.75-4.75L15.75 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d2b17smuf"/><path class="fp4xjtm1d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:anthill"} {...others} />);
}

export default Component;
