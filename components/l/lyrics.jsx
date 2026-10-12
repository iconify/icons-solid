import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c16yfd7oi {
  d: path("M16.75 13V7l1.75.75");
}

.gk9aqebnh {
  d: path("M4.75 3.25h14.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9.5L5.25 20.5v-3.25h-.5a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2m2 4.25h6m-6 3.5h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.shea171ph {
  cx: 15.25px;
  cy: 13px;
  r: 1.5px;
}
</style><g class="hntgybcog"><path class="gk9aqebnh"/><circle class="shea171ph"/><path class="c16yfd7oi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:lyrics"} {...others} />);
}

export default Component;
