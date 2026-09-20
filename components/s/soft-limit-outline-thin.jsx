import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c7z9o8buo {
  d: path("M7 15h10");
}

.c9aby-vrr {
  d: path("M8 10h2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ss0frm8tj {
  d: path("M13.5 4H16a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H8a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h2.5");
}

.v3sx_eb-h {
  d: path("M13.5 10H16");
}
</style><g class="hntgybcog"><path class="ss0frm8tj"/><path class="c9aby-vrr"/><path class="v3sx_eb-h"/><path class="c7z9o8buo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:soft-limit-outline-thin"} {...others} />);
}

export default Component;
