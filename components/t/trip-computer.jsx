import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hn7tnnbwb {
  d: path("M2.5 5h19v14h-19Z");
}

.ll0laybff {
  d: path("M8 14.5h1.5q2.5 0 2.5-2.5t2.5-2.5H16m-11 5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm11-5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hn7tnnbwb"/><path class="ll0laybff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:trip-computer"} {...others} />);
}

export default Component;
