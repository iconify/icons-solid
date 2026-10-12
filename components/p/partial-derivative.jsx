import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c1o3tzj3s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 5.5c1.5-1.25 3-1.75 4.5-1.75c3.25 0 5.5 2.75 5.5 7.5c0 5.75-2.75 9-6.25 9c-2.75 0-4.75-2-4.75-4.5s2-4.5 4.75-4.5c2.25 0 4.25 1.25 5.75 3.5");
}
</style><path class="c1o3tzj3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:partial-derivative"} {...others} />);
}

export default Component;
