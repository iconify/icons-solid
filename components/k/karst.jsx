import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bvu6c0jzq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 18C3 13 4 9 5.75 9c1.5 0 2 3 2.75 4c.5-4 2-9.5 3.5-9.5S15 9 15.5 12c.5-2.5 1.5-4.5 2.75-4.5C19.75 7.5 21 12 21.5 18m-19 3q2.25-1.25 4.5 0t4.5 0t4.5 0t5.5 0");
}
</style><path class="bvu6c0jzq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:karst"} {...others} />);
}

export default Component;
