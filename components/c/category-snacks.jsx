import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.flrj1hu_m {
  d: path("m4.5 4.5l1.5-2l1.5 2l1.5-2l1.5 2l1.5-2l1.5 2l1.5-2l1.5 2l1.5-2l1.5 2c2 4.5 2 10.5 0 15l-1.5 2l-1.5-2l-1.5 2l-1.5-2l-1.5 2l-1.5-2l-1.5 2l-1.5-2l-1.5 2l-1.5-2c-2-4.5-2-10.5 0-15");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ng6czxbrf {
  d: path("M7.5 12a4.5 3 0 1 0 9 0a4.5 3 0 1 0-9 0");
}
</style><g class="hntgybcog"><path class="flrj1hu_m"/><path class="ng6czxbrf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:category-snacks"} {...others} />);
}

export default Component;
