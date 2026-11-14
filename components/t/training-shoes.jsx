import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ek23gsyza {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 18.5v-10A1.5 1.5 0 0 1 4.5 7h3c.5 2 2 3.5 4.5 4l4.5 1c3 .75 4.5 2.5 4.5 5v1.5Zm0-3h18m-11-5l1.25-1.75M13 11.5l1.25-1.75");
}
</style><path class="ek23gsyza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:training-shoes"} {...others} />);
}

export default Component;
