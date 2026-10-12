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

.kbcov1bcr {
  d: path("M6.75 2.75h7.5l5 5v11.5a2 2 0 0 1-2 2H6.75a2 2 0 0 1-2-2V4.75a2 2 0 0 1 2-2");
}

.u__-6uoab {
  d: path("M14.25 2.75v3a2 2 0 0 0 2 2h3m-8.75 3.5v6.5m3-6.5v6.5");
}
</style><g class="hntgybcog"><path class="kbcov1bcr"/><path class="u__-6uoab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:legal-hold"} {...others} />);
}

export default Component;
