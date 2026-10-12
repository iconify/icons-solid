import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wkgzbcb-o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.5q3.375-2.625 6.75 0c3.375 2.625 4.5 1.75 6.75 0c1.25-1 2.75-1.25 4-1m-1.5-2l2.5 2L19 7.75M2.75 12.5q3.375-2.625 6.75 0c3.375 2.625 4.5 1.75 6.75 0c1.25-1 2.75-1.25 4-1m-1.5-2l2.5 2L19 13.75M2.75 18.5q3.375-2.625 6.75 0c3.375 2.625 4.5 1.75 6.75 0c1.25-1 2.75-1.25 4-1m-1.5-2l2.5 2L19 19.75");
}
</style><path class="wkgzbcb-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ocean-current"} {...others} />);
}

export default Component;
