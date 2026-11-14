import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.brxs6fb4v {
  d: path("M3 7.5a9 3.5 0 1 0 18 0a9 3.5 0 1 0-18 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tg681ubiq {
  d: path("M3 7.5v8a9 3.5 0 0 0 18 0v-8m-18 4a9 3.5 0 0 0 18 0m-11.5-4h.01m4.99 0h.01");
}
</style><g class="hntgybcog"><path class="brxs6fb4v"/><path class="tg681ubiq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:biscuits-stack"} {...others} />);
}

export default Component;
