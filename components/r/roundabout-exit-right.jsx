import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e1b69obhg {
  d: path("M10 21.5v-7a5 5 0 0 0 5-5h4.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zxw2_6bqs {
  d: path("m17.5 7.25l2.25 2.25l-2.25 2.25M10 14.5a5 5 0 1 1 4-8");
}
</style><g class="ulnmmdpxh"><path class="e1b69obhg"/><path class="zxw2_6bqs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:roundabout-exit-right"} {...others} />);
}

export default Component;
