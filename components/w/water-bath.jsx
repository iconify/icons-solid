import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r8lm80s3k {
  d: path("M7.5 3v9a1.75 1.75 0 0 0 3.5 0V3m3 0v9a1.75 1.75 0 0 0 3.5 0V3M5.25 17.5q2.25-1.5 4.5 0t4.5 0t4.5 0");
}

.tt-ql0bjg {
  d: path("M2.5 9v10A2.5 2.5 0 0 0 5 21.5h14a2.5 2.5 0 0 0 2.5-2.5V9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tt-ql0bjg"/><path class="r8lm80s3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:water-bath"} {...others} />);
}

export default Component;
