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

.ktzk7nbkm {
  d: path("M6.25 11V8.25h3m8.5 4.75v2.75h-3");
}

.onw8lwggl {
  d: path("M6.5 5.25h11a3.5 3.5 0 0 1 3.5 3.5v6.5a3.5 3.5 0 0 1-3.5 3.5h-11a3.5 3.5 0 0 1-3.5-3.5v-6.5a3.5 3.5 0 0 1 3.5-3.5");
}
</style><g class="hntgybcog"><path class="onw8lwggl"/><path class="ktzk7nbkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:aspect-ratio-4-3"} {...others} />);
}

export default Component;
