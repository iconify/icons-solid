import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iecvojwip {
  stroke-opacity: 0.4;
  d: path("M21 10.5V13.5M21 18C21 19.6569 19.6569 21 18 21M13.5 21H10.5M6 21C4.34315 21 3 19.6569 3 18M3 13.5V10.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r0mp58bjw {
  d: path("M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6");
}
</style><g class="nrj6p8qat"><path class="iecvojwip"/><path class="r0mp58bjw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:border-top-duotone"} {...others} />);
}

export default Component;
