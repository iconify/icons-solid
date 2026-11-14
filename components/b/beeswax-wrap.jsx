import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gehpesouz {
  d: path("M16.5 4.5V7H19");
}

.iml9c5bhw {
  d: path("m3.5 13l2-8.5h11L19 7l1.5 6ZM5 13c0 4 3 6.5 7 6.5s7-2.5 7-6.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iml9c5bhw"/><path class="gehpesouz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:beeswax-wrap"} {...others} />);
}

export default Component;
