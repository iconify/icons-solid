import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pfioxebak {
  d: path("M21 4.5 13.5 12l7.5 7.5Z");
}

.q-mksftst {
  d: path("m3 4.5 7.5 7.5L3 19.5Z");
}
</style><g class="hntgybcog"><path class="q-mksftst"/><path class="pfioxebak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:latent-outline-thin"} {...others} />);
}

export default Component;
