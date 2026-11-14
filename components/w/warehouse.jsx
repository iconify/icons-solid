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

.k5hpe-bcn {
  d: path("M8.5 12h7a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 19.5v-6A1.5 1.5 0 0 1 8.5 12M7 15h10M7 18h10");
}

.rr5rhrirp {
  d: path("M3 21V9l9-5.5L21 9v12Z");
}
</style><g class="hntgybcog"><path class="rr5rhrirp"/><path class="k5hpe-bcn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:warehouse"} {...others} />);
}

export default Component;
