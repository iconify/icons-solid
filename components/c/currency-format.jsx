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

.tux3sqb_r {
  d: path("M6.5 5.5h11A3.5 3.5 0 0 1 21 9v6a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 15V9a3.5 3.5 0 0 1 3.5-3.5");
}

.z1ksjibwx {
  d: path("M14 9.75c-.75-1.25-4-1.25-4 .75s4 1 4 3s-3.25 2-4 .75m2-6.5v8.5");
}
</style><g class="hntgybcog"><path class="tux3sqb_r"/><path class="z1ksjibwx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:currency-format"} {...others} />);
}

export default Component;
