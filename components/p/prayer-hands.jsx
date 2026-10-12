import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y4_qrwywp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 18V4.75a1.75 1.75 0 0 0-3.5 0v5.5c-1.5 1-2.25 2.5-2.25 4.25c0 1.5.5 2.75 1.5 3.5Zm3 0V4.75a1.75 1.75 0 0 1 3.5 0v5.5c1.5 1 2.25 2.5 2.25 4.25c0 1.5-.5 2.75-1.5 3.5Zm-7.25 3h11.5");
}
</style><path class="y4_qrwywp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:prayer-hands"} {...others} />);
}

export default Component;
