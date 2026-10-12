import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jlkvfgb8f {
  d: path("M2.75 9.25v8.5m18.5-8.5v8m0-6.75h-3.5l-3-1.75l-1.065-.623l-1.035.673l-3.05 2.1a1.4 1.4 0 0 0 1.55 2.3l2.35-1.45L18 16h3.25m-18.5-5.5H5.5l2.25-1.25");
}

.lme6-5b-z {
  d: path("M2.75 17.25H5.5l2.12 2.12l1.238.999l2.25-2.25l-1.238-.999M7.75 15l2.47 2.47l1.238.999l2.25-2.25l-1.238-.999M10 12.75l2.65 2.65l1.238.999l2.25-2.25l-1.238-.999m-5.65-8.9l2 2l3.5-3.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="jlkvfgb8f"/><path class="lme6-5b-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:handshake-deal-sharp"} {...others} />);
}

export default Component;
