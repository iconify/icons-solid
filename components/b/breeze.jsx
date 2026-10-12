import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gluuu5bnu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 9.5Q5 7 7.25 9.5t4.5 0m-9 5.5q2.25-2.5 4.5 0t4.5 0t4.5 0t4.5 0m-6-4.75c0-4.25 2.25-6.75 6.5-7c0 4.25-2.25 7-6.5 7");
}
</style><path class="gluuu5bnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:breeze"} {...others} />);
}

export default Component;
