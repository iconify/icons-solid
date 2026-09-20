import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o610cu0jy {
  d: path("M2.5 12a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0");
}

.qbdmmsbuw {
  d: path("M16 9a2 2 0 0 1 4 0");
}

.u_pwg_bmr {
  d: path("M7 10.5v3");
}

.zzarb32zm {
  d: path("M14 11a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v3.5a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="o610cu0jy"/><path class="u_pwg_bmr"/><path class="zzarb32zm"/><path class="qbdmmsbuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:escrow-outline-regular"} {...others} />);
}

export default Component;
