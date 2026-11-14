import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.knmpr7zgh {
  fill: currentColor;
  d: path("M2.5 2.5h3v3h-3Zm16 0h3v3h-3Zm-16 16h3v3h-3Zm16 0h3v3h-3Z");
}

.lw6t35brr {
  d: path("M4 4h16v16H4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lw6t35brr"/><path class="knmpr7zgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:canvas-element"} {...others} />);
}

export default Component;
