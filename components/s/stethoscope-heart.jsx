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

.r86e_n91x {
  cx: 18.75px;
  cy: 10.75px;
  r: 2.25px;
}

.rhnek6b2s {
  d: path("M4.25 3.25h1.5v5a4.5 4.5 0 0 0 9 0v-5h1.5m-6 9.5v2.5a4.25 4.25 0 0 0 8.5 0V13.5");
}
</style><g class="hntgybcog"><path class="rhnek6b2s"/><circle class="r86e_n91x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:stethoscope-heart"} {...others} />);
}

export default Component;
