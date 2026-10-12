import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g6-6k-bic {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 5.5c-3.9 0-7 2.9-7 6.5s3.1 6.5 7 6.5c1 0 1.75-.6 1.75-1.6V7.1c0-1-.75-1.6-1.75-1.6m3.75 0h7.75M13.5 8.75h7.75M13.5 12h7.75m-7.75 3.25h7.75M13.5 18.5h7.75");
}
</style><path class="g6-6k-bic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:high-beam"} {...others} />);
}

export default Component;
