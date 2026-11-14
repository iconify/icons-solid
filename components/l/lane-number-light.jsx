import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.erdp6sbut {
  d: path("M10.25 5.5c.25-.75 1-1 1.75-1c1 0 1.75.5 1.75 1.25S13 7 12.25 7c1 0 1.75.5 1.75 1.5c0 .75-.75 1.25-2 1.25c-.75 0-1.5-.25-1.75-1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yrwb1lbkt {
  d: path("M6.5 2.5h11V12h-11Zm5.5 10V21m-4 0h8");
}
</style><g class="ulnmmdpxh"><path class="yrwb1lbkt"/><path class="erdp6sbut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:lane-number-light"} {...others} />);
}

export default Component;
