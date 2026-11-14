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

.q-delcftb {
  d: path("M13 2.5zA1.5 1.5 0 0 1 14.5 4v5a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 11.5 9V4A1.5 1.5 0 0 1 13 2.5M9.5 18.75h.01m4.99 0h.01M12 15.5h.01");
}

.whl9nbc_l {
  d: path("m5.5 7.5l1.5 14h10l1.5-14M4 7.5h16");
}
</style><g class="hntgybcog"><path class="whl9nbc_l"/><path class="q-delcftb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bubble-tea-sealed"} {...others} />);
}

export default Component;
