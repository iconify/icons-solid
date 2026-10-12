import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fg5liwgya {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 2.75h2.5Q9.5 2.75 9.5 4v11.25q0 1.25 1.25 1.25H20q1.25 0 1.25 1.25V20q0 1.25-1.25 1.25H5.75Q4.5 21.25 4.5 20V4q0-1.25 1.25-1.25M7 5.25v9");
}
</style><path class="fg5liwgya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:allen-key"} {...others} />);
}

export default Component;
