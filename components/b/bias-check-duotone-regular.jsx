import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.atzi6u7-j {
  d: path("m14 16 3 3 5 -5");
}

.ez535v4_v {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 8h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nhzoypvde {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 13h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q2i8lfb2i {
  d: path("M4 13h10");
}

.rsui_05gv {
  d: path("M4 8h10");
}

.y-xo-dz3d {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m14 16 3 3 5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="ez535v4_v"/><path class="nhzoypvde"/><path class="y-xo-dz3d"/><path class="rsui_05gv"/><path class="q2i8lfb2i"/><path class="atzi6u7-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:bias-check-duotone-regular"} {...others} />);
}

export default Component;
