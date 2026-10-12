import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e-8if9bto {
  cx: 15.25px;
  cy: 4.5px;
  r: 1.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yakw97yev {
  d: path("m14 8.25l-2.5 5h5.25L18.5 19h2.75m-9-9.5h4.25m-8.25 1.1a5.25 5.25 0 1 0 6.35 7.15m-11.85-10h3.5M3.75 11h2");
}
</style><g class="hntgybcog"><circle class="e-8if9bto"/><path class="yakw97yev"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:wheelchair-active"} {...others} />);
}

export default Component;
