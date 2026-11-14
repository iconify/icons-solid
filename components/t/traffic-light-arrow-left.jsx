import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gw__ijwvb {
  d: path("m11 14.5l-2 2l2 2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.itnzs0bys {
  d: path("M11.875 2h.25A4.375 4.375 0 0 1 16.5 6.375v11.25A4.375 4.375 0 0 1 12.125 22h-.25A4.375 4.375 0 0 1 7.5 17.625V6.375A4.375 4.375 0 0 1 11.875 2M12 6h.01M12 10h.01M15 16.5H9");
}
</style><g class="hntgybcog"><path class="itnzs0bys"/><path class="gw__ijwvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:traffic-light-arrow-left"} {...others} />);
}

export default Component;
