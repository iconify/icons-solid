import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dw94rpbtz {
  d: path("M21 10a9.5 7 0 1 0 0 4");
}

.iy0p96bgf {
  d: path("M16.5 10a5.5 3.5 0 1 0 0 4m0-4H21m-4.5 4H21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dw94rpbtz"/><path class="iy0p96bgf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bangle"} {...others} />);
}

export default Component;
