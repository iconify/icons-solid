import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k-iwj4bap {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 20.5Q5.5 14 2.5 10M9 20.5Q8.5 11 6.5 4M12 20.5v-18m3 18Q15.5 11 17.5 4m.5 16.5q.5-6.5 3.5-10.5m-18 10.5h17");
}
</style><path class="k-iwj4bap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:sedge-grass"} {...others} />);
}

export default Component;
