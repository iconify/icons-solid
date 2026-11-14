import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nr1jsabyh {
  d: path("m3 10l7 3.5l1.318-.659m2.505-1.252L17 10m-7 3.5v8m2-12L19.5 2M15 2h4.5v4.5");
}

.s59juobne {
  d: path("M15.993 9.496L17 10v8l-7 3.5L3 18v-8l7-3.5l.716.358");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s59juobne"/><path class="nr1jsabyh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:export-module"} {...others} />);
}

export default Component;
