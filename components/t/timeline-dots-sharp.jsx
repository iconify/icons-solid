import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cq42ivb0d {
  cx: 6px;
  cy: 18.5px;
  r: 1.75px;
}

.mm8bfyb-p {
  d: path("M6 7.25v3m0 3.5v3M10.5 5.5h9.75m-9.75 13H19M10.5 12h7");
}

.qcx76zaxv {
  cx: 6px;
  cy: 12px;
  r: 1.75px;
}

.t09ysxkfx {
  cx: 6px;
  cy: 5.5px;
  r: 1.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="t09ysxkfx"/><circle class="qcx76zaxv"/><circle class="cq42ivb0d"/><path class="mm8bfyb-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:timeline-dots-sharp"} {...others} />);
}

export default Component;
