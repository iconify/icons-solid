import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b0ou8_8or {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.3 7.05a7 7 0 1 1 0 9.9m1.75 0H9.3v1.75");
}

.j_1f77bep {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.65 10.5h-7.4a1.5 1.5 0 0 0 0 3h7.4a3 3 0 1 0 0-3");
}

.wb2vpv6rb {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14.25 12h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="j_1f77bep"/><path class="wb2vpv6rb"/><path class="b0ou8_8or"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ratchet"} {...others} />);
}

export default Component;
