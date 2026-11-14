import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cj2n4ybzq {
  d: path("M6 13a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.pl5ma5bxu {
  d: path("M5.5 3.5h4m-7 2.75h13v13.5h-13Zm13 2.25h2v4h-2m2-6h4v8h-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pl5ma5bxu"/><path class="cj2n4ybzq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:camera-eyepiece"} {...others} />);
}

export default Component;
