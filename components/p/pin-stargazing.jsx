import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ic_op6ycn {
  fill: currentColor;
  d: path("M5 4.5h.01");
}

.m4v2ytkfp {
  d: path("m3.679 11.051l10.392-6l2.25 3.898l-10.392 6ZM10.5 12L6 21m4.5-9l4.5 9m4-19q0 2 2 2q-2 0-2 2q0-2-2-2q2 0 2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m4v2ytkfp"/><path class="ic_op6ycn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pin-stargazing"} {...others} />);
}

export default Component;
