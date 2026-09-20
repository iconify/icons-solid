import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bo51iypxr {
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s_rpgcb_d {
  d: path("M19.07 4.93a10 10 0 1 1 -14.14 0");
}

.t27ig7bvg {
  d: path("M16.24 7.76a6 6 0 1 1 -8.5 0");
}
</style><g class="nrj6p8qat"><path class="bo51iypxr"/><path class="t27ig7bvg"/><path class="s_rpgcb_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:double-tap-outline-regular"} {...others} />);
}

export default Component;
