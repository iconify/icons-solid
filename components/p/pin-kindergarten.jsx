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

.j_ell-q8u {
  d: path("M3.5 8H16v12.5M16 8l4.5-4.5");
}

.kqwmd8q4w {
  d: path("M7.25 14.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.u1l9geasb {
  d: path("M3.5 8L8 3.5h12.5V16L16 20.5H3.5Z");
}
</style><g class="hntgybcog"><path class="u1l9geasb"/><path class="j_ell-q8u"/><path class="kqwmd8q4w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pin-kindergarten"} {...others} />);
}

export default Component;
