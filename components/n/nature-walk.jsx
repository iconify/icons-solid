import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h508g34zb {
  d: path("M9.5 21.5c0-6 4.5-8 2.5-16.5");
}

.pj5m04b7u {
  d: path("M2.5 8.5q9.5-7 19 0M4.5 12l2 6.5h-4Zm0 6.5V21m15-9l2 6.5h-4Zm0 6.5V21");
}

.pyh7ohwot {
  d: path("M14.5 21.5c1-6 1-10.5-2.5-16.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pj5m04b7u"/><path class="h508g34zb"/><path class="pyh7ohwot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:nature-walk"} {...others} />);
}

export default Component;
