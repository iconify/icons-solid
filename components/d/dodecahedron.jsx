import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e76fn-33m {
  d: path("m12 2.5l5.5 1.75L21 9v6l-3.5 4.75L12 21.5l-5.5-1.75L3 15V9l3.5-4.75Z");
}

.ucoqxzsok {
  d: path("m12 7.5l4.25 3l-1.5 5.25h-5.5l-1.5-5.25Zm0 0v-5m4.25 8L21 9m-6.25 6.75l2.75 4m-8.25-4l-2.75 4m1.25-9.25L3 9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e76fn-33m"/><path class="ucoqxzsok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dodecahedron"} {...others} />);
}

export default Component;
