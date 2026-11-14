import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b28rrzbgr {
  d: path("M10.5 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ley79ielm {
  d: path("M10.25 9a3.5 3.5 0 1 1 3.5 0a3.5 3.5 0 1 1 1.75 3a3.5 3.5 0 1 1-1.75 3a3.5 3.5 0 1 1-3.5 0a3.5 3.5 0 1 1-1.75-3a3.5 3.5 0 1 1 1.75-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ley79ielm"/><path class="b28rrzbgr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:flower-shape"} {...others} />);
}

export default Component;
