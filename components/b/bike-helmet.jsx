import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ica7y0b5y {
  d: path("M3.5 13.5a8.5 8.5 0 0 1 17 0");
}

.ty9n61aba {
  d: path("M4 13h16a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 20 16H4a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 4 13m2.5 3c1 5 10 5 11 0");
}
</style><g class="hntgybcog"><path class="ica7y0b5y"/><path class="ty9n61aba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bike-helmet"} {...others} />);
}

export default Component;
