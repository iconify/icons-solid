import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bezadlphv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 3.75h16.5q1 0 .63.93l-.64 1.64q-.37.93-1.37.93H5.13q-1 0-1.37-.93l-.64-1.64q-.37-.93.63-.93m2.56 6.5h11.38q1 0 .63.93l-.64 1.64q-.37.93-1.37.93H7.69q-1 0-1.37-.93l-.64-1.64q-.37-.93.63-.93m2.56 6.5h6.26q1 0 .63.93l-.64 1.64q-.37.93-1.37.93h-3.5q-1 0-1.37-.93l-.64-1.64q-.37-.93.63-.93");
}
</style><path class="bezadlphv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:funnel"} {...others} />);
}

export default Component;
