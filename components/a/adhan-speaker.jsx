import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vwv_b611c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 21.25h5q.5 0 .45-.5L11.3 11q-.05-.5-.55-.5h-3q-.5 0-.55.5l-.9 9.75q-.05.5.45.5m1-10.75V7a1.5 1.5 0 0 1 3 0v3.5ZM6 10.5h6.5M9.25 2.75V5.5m4.97-.85a3.5 3.5 0 0 1 0 3.7m2.75-5.43a6.75 6.75 0 0 1 0 7.16");
}
</style><path class="vwv_b611c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:adhan-speaker"} {...others} />);
}

export default Component;
