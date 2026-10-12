import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cq8vq3b0u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 6.5h13q1 0 .55.89l-2.6 5.22q-.45.89-1.45.89h-13q-1 0-.55-.89l2.6-5.22q.45-.89 1.45-.89m3.25 1.25l-2.25 4.5m7.25-4.5l-2.25 4.5m-7.5 1.25v6.75m10-6.75v6.75");
}
</style><path class="cq8vq3b0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:charpai"} {...others} />);
}

export default Component;
