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

.sr11qub9y {
  d: path("M8 13.75c1-2.75 1.75-3.5 2.5-3.25s0 3.25 1.25 3.25c1 0 1.75-2 2.5-2S15 13 16 13");
}

.zotm8ib2h {
  d: path("M2.5 7V4.5a2 2 0 0 1 2-2H7m10 0h2.5a2 2 0 0 1 2 2V7m0 10v2.5a2 2 0 0 1-2 2H17m-10 0H4.5a2 2 0 0 1-2-2V17m4.75-9.5h9.5a1.75 1.75 0 0 1 1.75 1.75v5.5a1.75 1.75 0 0 1-1.75 1.75h-9.5a1.75 1.75 0 0 1-1.75-1.75v-5.5A1.75 1.75 0 0 1 7.25 7.5");
}
</style><g class="hntgybcog"><path class="zotm8ib2h"/><path class="sr11qub9y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cheque-capture-back"} {...others} />);
}

export default Component;
