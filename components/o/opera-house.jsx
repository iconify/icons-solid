import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jrh65o_5k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 19.5Q4.5 8 12 4.5q-1 7.5-2.25 15Zm9.75 0Q14 10 21.25 8q-1.5 5-1.75 11.5Zm-10 0h18.5");
}
</style><path class="jrh65o_5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:opera-house"} {...others} />);
}

export default Component;
