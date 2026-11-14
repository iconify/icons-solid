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

.l04p4fboa {
  d: path("M19.5 12a3 3 0 0 1-2.25 5.25A3 3 0 0 1 12 19.5a3 3 0 0 1-5.25-2.25A3 3 0 0 1 4.5 12a3 3 0 0 1 2.25-5.25A3 3 0 0 1 12 4.5a3 3 0 0 1 5.25 2.25A3 3 0 0 1 19.5 12");
}

.l97qpbbsj {
  d: path("m9 12l2 2l4-4");
}
</style><g class="hntgybcog"><path class="l04p4fboa"/><path class="l97qpbbsj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:verified-badge"} {...others} />);
}

export default Component;
