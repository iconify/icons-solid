import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gclptsris {
  d: path("M3.5 4.75V17a3.5 1.75 0 0 0 7 0V4.75m0 3.75h10V21L18 19.75L15.5 21L13 19.75L10.5 21v-4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n02y69b_a {
  d: path("M3.5 4.75a3.5 1.75 0 1 0 7 0a3.5 1.75 0 1 0-7 0");
}
</style><g class="hntgybcog"><path class="n02y69b_a"/><path class="gclptsris"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bag-for-produce-roll"} {...others} />);
}

export default Component;
