import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c85wnfbcr {
  d: path("M10 13.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm5.5-4a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm0 8.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.kwocv2o6o {
  d: path("M3 21.5A18.5 18.5 0 0 1 21.5 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kwocv2o6o"/><path class="c85wnfbcr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bowling-finger-holes"} {...others} />);
}

export default Component;
