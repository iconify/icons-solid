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

.mpfujxbox {
  d: path("M9.5 9.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.wqps1mb2d {
  d: path("M12 2.5c-3.5 0-6.5 3-6.5 7c0 6 6.5 12 6.5 12s6.5-6 6.5-12c0-4-3-7-6.5-7");
}
</style><g class="hntgybcog"><path class="wqps1mb2d"/><path class="mpfujxbox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ad-location"} {...others} />);
}

export default Component;
