import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tw77a3xzw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 12c1.5-9.5 3.5-9.5 5 0s3.5 9.5 5 0M2.5 12h19M4.75 9.75L2.5 12l2.25 2.25m14.5-4.5L21.5 12l-2.25 2.25");
}
</style><path class="tw77a3xzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:alternating-current"} {...others} />);
}

export default Component;
