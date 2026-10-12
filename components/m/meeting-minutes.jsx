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

.hyu6tnq8g {
  d: path("M9.75 21.25h-3.5a2 2 0 0 1-2-2V4.75a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v5M7.5 7H14m-6.5 3.5H14M7.5 14h3");
}

.lj9r6l14u {
  d: path("M17 15v2l1.25.75");
}

.upu83lbfh {
  cx: 17px;
  cy: 17px;
  r: 4.25px;
}
</style><g class="hntgybcog"><path class="hyu6tnq8g"/><circle class="upu83lbfh"/><path class="lj9r6l14u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:meeting-minutes"} {...others} />);
}

export default Component;
