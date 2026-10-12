import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u73nbjx2i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.24 6.21l1.02 3.08q.24.71.53 1.4l1.17 2.87q.29.69.7 1.32l3.68 5.74q.41.63-.34.63h-2.5q-.75 0-1.28-.53l-2.69-2.69q-.53-.53-1.06 0l-2.69 2.69q-.53.53-1.28.53H5q-.75 0-.34-.63l3.68-5.74q.41-.63.7-1.32l1.17-2.87q.29-.69.53-1.4l1.02-3.08q.24-.71.48 0M8 14.25h8M9.75 10h4.5M12 5.5V2.75");
}
</style><path class="u73nbjx2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:landmark"} {...others} />);
}

export default Component;
