import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y_8y-u51y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.54 5.13l5.92 12.24q.54 1.13-.71 1.13H6.25q-1.25 0-.71-1.13l5.92-12.24q.54-1.13 1.08 0M2.75 14l5-1.5M17 10.75l4.25-1.25m-3.75 4l3.75 1m-4 1.75l3.5 2.25");
}
</style><path class="y_8y-u51y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:prism"} {...others} />);
}

export default Component;
