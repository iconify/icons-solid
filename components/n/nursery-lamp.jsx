import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bibby3o2c {
  d: path("M10 18h5a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 15 21h-5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 10 18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n4xcbtbse {
  d: path("M17 4.5A7.5 7.5 0 1 0 18.5 15A6 6 0 0 1 17 4.5");
}
</style><g class="hntgybcog"><path class="n4xcbtbse"/><path class="bibby3o2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:nursery-lamp"} {...others} />);
}

export default Component;
