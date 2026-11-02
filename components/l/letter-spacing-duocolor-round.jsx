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

.pd6mrqd0g {
  stroke-opacity: 0.4;
  d: path("M3 17h18M6 14l-3 3l3 3m12 0l3-3l-3-3");
}

.rd7qjtxmb {
  d: path("M9 10V7a3 3 0 0 1 6 0v3M9 8h6");
}
</style><g class="nrj6p8qat"><path class="pd6mrqd0g"/><path class="rd7qjtxmb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:letter-spacing-duocolor-round"} {...others} />);
}

export default Component;
