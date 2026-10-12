import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g8-uwvbdc {
  d: path("m11 8.5l3.75-3.75L18.5 8.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rxlus3b-x {
  d: path("M4.25 19.75h8a2.5 2.5 0 0 0 2.5-2.5V4.75");
}
</style><g class="hntgybcog"><path class="rxlus3b-x"/><path class="g8-uwvbdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:corner-right-up"} {...others} />);
}

export default Component;
