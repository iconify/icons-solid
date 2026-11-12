import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hllyxzboc {
  cx: 11.5px;
  cy: 11.5px;
  r: 9.5px;
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mj_6ev9oe {
  d: path("M20 20L22 22");
}

.swrlsub8n {
  d: path("M14.5 10.5V12.5C14.5 14.1569 13.1569 15.5 11.5 15.5M14.5 10.5C14.5 8.84315 13.1569 7.5 11.5 7.5C9.84315 7.5 8.5 8.84315 8.5 10.5M14.5 10.5H11.5M8.5 11.5V12.5C8.5 14.1569 9.84315 15.5 11.5 15.5M8.5 11.5V10.5M8.5 11.5H7M8.5 10.5H11.5M11.5 15.5V10.5M14.5715 11.5H16M14.5 14L15.5 14.5M8.5 14L7.5 14.5M14.5 9L15.5 8.5M8.5 9L7.5 8.5");
}
</style><g class="ipq1z-bjh"><circle class="hllyxzboc"/><path class="swrlsub8n"/><path class="mj_6ev9oe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:minimalistic-magnifer-bug-linear"} {...others} />);
}

export default Component;
