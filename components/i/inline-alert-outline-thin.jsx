import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b603-acaz {
  d: path("M10 12h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lldlp5blb {
  d: path("M5 14.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.oh4p-ccfe {
  d: path("M2 10a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.x6pm5hl4u {
  d: path("M6 10v2.5");
}
</style><g class="hntgybcog"><path class="oh4p-ccfe"/><path class="x6pm5hl4u"/><path class="lldlp5blb"/><path class="b603-acaz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:inline-alert-outline-thin"} {...others} />);
}

export default Component;
