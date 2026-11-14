import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.psnez77eq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.661 17.124l3.205-8.361a1.75 1.75 0 0 1 3.268 0l3.205 8.361a1.75 1.75 0 0 1-1.634 2.376h-6.41a1.75 1.75 0 0 1-1.634-2.376M18.5 19.5v-15m-3.25 3.25L18.5 4.5l3.25 3.25");
}
</style><path class="psnez77eq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:delta-v"} {...others} />);
}

export default Component;
