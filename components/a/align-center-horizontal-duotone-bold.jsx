import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kogazqrhg {
  fill: currentColor;
  d: path("M14 9.5h4v5h-4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.m2ri9cc6o {
  d: path("M14 9.5h4v5h-4Z");
}

.nt8cxnbeh {
  d: path("M3 12h2.5");
}

.qvx0fvm9m {
  d: path("M7 8h4v8H7Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ux4i7cc2p {
  fill: currentColor;
  d: path("M7 8h4v8H7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.y7_y8yq8z {
  d: path("M18.5 12H21");
}
</style><g class="s0phu2bbs"><path class="ux4i7cc2p"/><path class="kogazqrhg"/><path class="nt8cxnbeh"/><path class="y7_y8yq8z"/><path class="qvx0fvm9m"/><path class="m2ri9cc6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:align-center-horizontal-duotone-bold"} {...others} />);
}

export default Component;
