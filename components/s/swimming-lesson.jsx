import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.itrkc9w1q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM3 14c1.5-1.5 2.5-1.5 4 0l4.5-5l5.5 2M2.5 18q3-2.25 6 0t6 0t6 0");
}
</style><path class="itrkc9w1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:swimming-lesson"} {...others} />);
}

export default Component;
