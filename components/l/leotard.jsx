import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n5v89obeg {
  d: path("M8.5 6.5q3.5 4.5 7 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w1zjl4b3s {
  d: path("M8.5 2.5v4c0 1.5-3 2.5-3 5v2l5 8h3l5-8v-2c0-2.5-3-3.5-3-5v-4");
}
</style><g class="ulnmmdpxh"><path class="w1zjl4b3s"/><path class="n5v89obeg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:leotard"} {...others} />);
}

export default Component;
