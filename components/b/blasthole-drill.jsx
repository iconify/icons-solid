import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.broi0_bnx {
  d: path("M8 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m8 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pw4n1lb9q {
  d: path("M4.25 2.5h.5A1.75 1.75 0 0 1 6.5 4.25v12A1.75 1.75 0 0 1 4.75 18h-.5a1.75 1.75 0 0 1-1.75-1.75v-12A1.75 1.75 0 0 1 4.25 2.5M4.5 18v3.5m2-4.5v-4.5h8V9h4l3 3.5V17Z");
}
</style><g class="hntgybcog"><path class="pw4n1lb9q"/><path class="broi0_bnx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:blasthole-drill"} {...others} />);
}

export default Component;
