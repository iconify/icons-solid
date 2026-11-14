import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.us6w3gb9h {
  d: path("m6 8l3-2.25l3.5 1.5L18 5.5m-3.5 12h7V22h-7Zm1.75 0v-1.25a1.75 1.75 0 0 1 3.5 0v1.25");
}

.zkxfm7bmr {
  d: path("M11.7 21.5H2.5v-19h19v10.9M2.5 11h19M11 11v10.5");
}
</style><g class="ulnmmdpxh"><path class="zkxfm7bmr"/><path class="us6w3gb9h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dashboard-lock"} {...others} />);
}

export default Component;
