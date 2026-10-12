import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h8x3kd-6d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 9.25H9c.6 3.25 1.9 6 3 7.75c1.1-1.75 2.4-4.5 3-7.75h2.75a2.5 2.5 0 1 0-2.43-3.1a3.5 3.5 0 0 0-6.64 0a2.5 2.5 0 1 0-2.43 3.1ZM4 20.25l2-1.5l2 1.5l2 1.5l2-1.5l2-1.5l2 1.5l2 1.5l2-1.5");
}
</style><path class="h8x3kd-6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:waterspout-sharp"} {...others} />);
}

export default Component;
