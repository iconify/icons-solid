import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c3utu1b2z {
  d: path("M9.5 3q2.5 2.25 5 0L20 5l1.5 10H18v5.75q-6 1.25-12 0V15H2.5L4 5Z");
}

.et7k4z88t {
  d: path("M17.75 4.25Q17 10 18 15M6.25 4.25Q7 10 6 15");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="c3utu1b2z"/><path class="et7k4z88t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fit-oversized"} {...others} />);
}

export default Component;
