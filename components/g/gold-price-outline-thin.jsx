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

.rwt37ub5x {
  d: path("m5 9.5 4 -4 3 3L18.5 2");
}

.u1klnyb3u {
  d: path("m2 18.5 5 -5h10l5 5Z");
}
</style><g class="hntgybcog"><path class="u1klnyb3u"/><path class="rwt37ub5x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:gold-price-outline-thin"} {...others} />);
}

export default Component;
