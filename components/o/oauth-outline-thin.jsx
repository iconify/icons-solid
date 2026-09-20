import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g9_x3sqrx {
  d: path("M6 14h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hubgvrbhc {
  d: path("M2 14a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.k8_tyfz0x {
  d: path("M8 11a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2H10a2 2 0 0 1 -2 -2Z");
}

.utjpr2bvm {
  d: path("M11 9a4 4 0 0 1 8 0");
}
</style><g class="hntgybcog"><path class="k8_tyfz0x"/><path class="utjpr2bvm"/><path class="hubgvrbhc"/><path class="g9_x3sqrx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:oauth-outline-thin"} {...others} />);
}

export default Component;
