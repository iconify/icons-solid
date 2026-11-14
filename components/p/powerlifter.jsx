import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ua2w-rbpx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 8H2.5v8H8m8-8h5.5v8H16M10.625 5.5h2.75A2.625 2.625 0 0 1 16 8.125v7.75a2.625 2.625 0 0 1-2.625 2.625h-2.75A2.625 2.625 0 0 1 8 15.875v-7.75A2.625 2.625 0 0 1 10.625 5.5M12 9v6");
}
</style><path class="ua2w-rbpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:powerlifter"} {...others} />);
}

export default Component;
