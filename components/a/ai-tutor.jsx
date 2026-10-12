import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.akfbh4brr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.89 4.46l7.47 3.83q.89.46 0 .92l-7.47 3.83q-.89.46-1.78 0L3.64 9.21q-.89-.46 0-.92l7.47-3.83q.89-.46 1.78 0M6.5 11v4.5c1.25 1.25 3 2 5.5 2m5.5-4q.42 3.08 3.5 3.5q-3.08.42-3.5 3.5q-.42-3.08-3.5-3.5q3.08-.42 3.5-3.5");
}
</style><path class="akfbh4brr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ai-tutor"} {...others} />);
}

export default Component;
