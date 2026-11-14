import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.djuruebfr {
  fill: currentColor;
  d: path("M10 10c1.5-1.25 4.25-.75 4.75 1.25s-1 3.75-3 3.5s-3-3.5-1.75-4.75Z");
}

.n6s3s7bor {
  d: path("m12 3l2.5 3.5l4 1v4l2.25 3.75l-5 1.25l-2.25 4L9.75 18l-5-.75L6 12.5l-1.25-4l3.5-1.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n6s3s7bor"/><path class="djuruebfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cancer-cell"} {...others} />);
}

export default Component;
