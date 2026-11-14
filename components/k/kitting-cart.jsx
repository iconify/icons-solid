import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gpc85nk9h {
  d: path("M3.5 3v14h16m-16-6.5h16M4.5 20a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m11 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u6ro9ibqd {
  d: path("M8.75 5h1a1.75 1.75 0 0 1 1.75 1.75v2a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 7 8.75v-2A1.75 1.75 0 0 1 8.75 5m6.5 0h1A1.75 1.75 0 0 1 18 6.75v2a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75v-2A1.75 1.75 0 0 1 15.25 5");
}
</style><g class="hntgybcog"><path class="gpc85nk9h"/><path class="u6ro9ibqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:kitting-cart"} {...others} />);
}

export default Component;
