import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bi_uzqb5k {
  width: 18.5px;
  height: 10.5px;
  x: 2.75px;
  y: 3.75px;
  rx: 2px;
}

.cp_wmrhmt {
  d: path("m6 11.25l3.5-4l2.25 2.5L13.5 8l4.5 3.25m-11.5 3v7m11-7v7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="bi_uzqb5k"/><path class="cp_wmrhmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:trail-sign"} {...others} />);
}

export default Component;
