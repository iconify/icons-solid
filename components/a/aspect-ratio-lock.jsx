import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tk0mugt8p {
  d: path("M11.7 18.5H2.5v-16h16v7.7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xjmx68i3d {
  d: path("M6 10V6h4m4.5 10.5H22V22h-7.5Zm1.75 0V15a2 2 0 0 1 4 0v1.5");
}
</style><g class="ulnmmdpxh"><path class="tk0mugt8p"/><path class="xjmx68i3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:aspect-ratio-lock"} {...others} />);
}

export default Component;
