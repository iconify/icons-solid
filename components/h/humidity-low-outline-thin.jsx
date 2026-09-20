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

.j9mpubb9t {
  d: path("m12 6 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
}

.jwnes9bsk {
  d: path("M8 19h8");
}

.oqj-o0b2r {
  d: path("M5 14h14");
}
</style><g class="hntgybcog"><path class="j9mpubb9t"/><path class="oqj-o0b2r"/><path class="jwnes9bsk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:humidity-low-outline-thin"} {...others} />);
}

export default Component;
