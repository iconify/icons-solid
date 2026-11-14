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

.l150tfb6e {
  d: path("M9 9a3 3 0 1 0 6 0a3 3 0 1 0-6 0m7 7.75L17.5 19a1.75 1.75 0 1 1-3 0Z");
}

.vlsnbbbzm {
  d: path("M2.5 9C5 4.75 8.25 3 12 3s7 1.75 9.5 6c-2.5 4.25-5.75 6-9.5 6s-7-1.75-9.5-6");
}
</style><g class="hntgybcog"><path class="vlsnbbbzm"/><path class="l150tfb6e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:eye-tear"} {...others} />);
}

export default Component;
