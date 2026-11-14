import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kwd6tdbsf {
  d: path("M3.5 7.5L12 3l8.5 4.5v9L12 21l-8.5-4.5Z");
}

.pzm8jabqj {
  d: path("M10 8c0-1.5 4-1.5 4 .5c0 1.5-2 1.5-2 3");
}

.u8054pfip {
  d: path("M3.5 7.5L12 12l8.5-4.5M12 12v9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kwd6tdbsf"/><path class="u8054pfip"/><path class="pzm8jabqj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:mystery-box"} {...others} />);
}

export default Component;
