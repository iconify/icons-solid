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

.lcj9fhsvt {
  d: path("M5 3.5c5.5 0 7 3.5 7 12");
}

.wf2v4gb1c {
  d: path("M8.25 11.75L12 15.5l3.75-3.75M7.5 20.5h9");
}
</style><g class="hntgybcog"><path class="lcj9fhsvt"/><path class="wf2v4gb1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:de-escalate"} {...others} />);
}

export default Component;
