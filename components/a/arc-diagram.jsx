import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h6fn9q-1n {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 13.75a5.5 5.5 0 0 1 11 0");
}

.libckgbih {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 13.75a5.5 5.5 0 0 1 11 0");
}

.sy16llhju {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 17h.01M9 17h.01M15 17h.01M20 17h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="h6fn9q-1n"/><path class="libckgbih"/><path class="sy16llhju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:arc-diagram"} {...others} />);
}

export default Component;
