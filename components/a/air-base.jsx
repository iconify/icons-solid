import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e6t-mdbow {
  d: path("M2.5 15.5v-4a9.5 7 0 0 1 19 0v4Z");
}

.qlmr8fbah {
  d: path("M7.5 15.5V11h9v4.5M4 19.5h3.5m2.75 0h3.5m2.75 0H20");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e6t-mdbow"/><path class="qlmr8fbah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:air-base"} {...others} />);
}

export default Component;
