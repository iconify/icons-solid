import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gtrikccag {
  d: path("M6.5 10L10 6.5l3 2l4.5-3m-2.75 13a3.75 3.75 0 0 1 7 0a3.75 3.75 0 0 1-7 0Zm3.5 0h.01");
}

.px7c0rb8l {
  d: path("M2.5 2.5h19v10.75h-19Zm6 19l3.5-4v-4.25m0 4.25v.4m0 1.2v2.4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="px7c0rb8l"/><path class="gtrikccag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:deck-review"} {...others} />);
}

export default Component;
