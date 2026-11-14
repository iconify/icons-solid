import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rmde2-j-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.8 19H2.5V2.5H19v7.3m-8.25-7.3v16M2.5 10.75h16M19 16q1 2 3 3q-2 1-3 3q-1-2-3-3q2-1 3-3Z");
}
</style><path class="rmde2-j-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:glass-cleaner"} {...others} />);
}

export default Component;
