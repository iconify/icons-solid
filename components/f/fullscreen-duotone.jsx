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

.z14q86kcr {
  d: path("M10 21L3.5 21C3.2239 21 3 20.7761 3 20.5L3 14M10 14L3.6 20.4");
}

.zq7x653mj {
  stroke-opacity: 0.4;
  d: path("M14 3L20.5 3C20.7761 3 21 3.2239 21 3.5L21 10M14 10L20.4 3.6");
}
</style><g class="nrj6p8qat"><path class="zq7x653mj"/><path class="z14q86kcr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:fullscreen-duotone"} {...others} />);
}

export default Component;
