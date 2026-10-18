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

.wavu9ccbs {
  stroke-opacity: 0.4;
  d: path("M8 4.5L21 4.5M8 9.5L21 9.5M8 14.5L18 14.5M8 19.5L14 19.5");
}

.xhifefboz {
  d: path("M3 3L3 21");
}
</style><g class="nrj6p8qat"><path class="wavu9ccbs"/><path class="xhifefboz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:align-left-2-duotone"} {...others} />);
}

export default Component;
