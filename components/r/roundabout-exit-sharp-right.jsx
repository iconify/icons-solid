import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c82l2lwth {
  d: path("M10.75 21.5v-7a5 5 0 0 0 3.5-1.5l4 4");
}

.htnno_n8l {
  d: path("M15 17h3.25v-3.25m-7.5.75a5 5 0 1 1 5-4.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c82l2lwth"/><path class="htnno_n8l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:roundabout-exit-sharp-right"} {...others} />);
}

export default Component;
