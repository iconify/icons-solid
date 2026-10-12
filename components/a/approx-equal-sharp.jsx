import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j2jel8b8y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 9.75c1.75-2 3.75-2.5 7.25-1s5.5 1 7.25-1m-14.5 8.5c1.75-2 3.75-2.5 7.25-1s5.5 1 7.25-1");
}
</style><path class="j2jel8b8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:approx-equal-sharp"} {...others} />);
}

export default Component;
