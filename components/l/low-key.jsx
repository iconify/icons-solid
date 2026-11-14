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

.mw24mpbeq {
  fill: currentColor;
  d: path("M4.5 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0");
}

.o25klbbjj {
  d: path("M15.949 4.218a9.5 9.5 0 0 1 0 15.564");
}
</style><g class="hntgybcog"><path class="mw24mpbeq"/><path class="o25klbbjj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:low-key"} {...others} />);
}

export default Component;
