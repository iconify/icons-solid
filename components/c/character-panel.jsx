import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b27-yrh8j {
  d: path("M3 3h18v18H3Zm0 4.5h18");
}

.m2nmvobxf {
  d: path("m6 18l3-7.5l3 7.5Zm1-2.5h4m4-3.5h3m-3 4h2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b27-yrh8j"/><path class="m2nmvobxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:character-panel"} {...others} />);
}

export default Component;
