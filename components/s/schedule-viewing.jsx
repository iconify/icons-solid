import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iloc6ub9m {
  d: path("M11.7 21.5H5v-19h12.5v8.9");
}

.mwl6-mb8y {
  d: path("M14.5 15.5h7v6.25h-7Zm0 2.5h7m-4.75-3.75v2.25m2.5-2.25v2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iloc6ub9m"/><path class="mwl6-mb8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:schedule-viewing"} {...others} />);
}

export default Component;
