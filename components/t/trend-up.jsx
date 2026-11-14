import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hkg8_gt-w {
  d: path("M15.5 7h5v5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r-07k_b6z {
  d: path("m3 18l5-5.5l4 3L20.5 7");
}
</style><g class="hntgybcog"><path class="r-07k_b6z"/><path class="hkg8_gt-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:trend-up"} {...others} />);
}

export default Component;
