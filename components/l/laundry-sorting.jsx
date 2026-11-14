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

.itqzbxbbn {
  d: path("M12 4v16m4.5-13l-2 1.5l.75 2.5l.5-.25V17h4.5v-6.25l.5.25l.75-2.5l-2-1.5c-.5.75-1 1-1.5 1s-1-.25-1.5-1");
}

.qeftacc2k {
  fill: currentColor;
  d: path("m4.5 7l-2 1.5l.75 2.5l.5-.25V17h4.5v-6.25l.5.25l.75-2.5l-2-1.5c-.5.75-1 1-1.5 1s-1-.25-1.5-1");
}
</style><g class="hntgybcog"><path class="qeftacc2k"/><path class="itqzbxbbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:laundry-sorting"} {...others} />);
}

export default Component;
