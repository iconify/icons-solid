import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k--d_ldvf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 3h4.75A2.625 2.625 0 0 1 13 5.625v12.75A2.625 2.625 0 0 1 10.375 21h-4.75A2.625 2.625 0 0 1 3 18.375V5.625A2.625 2.625 0 0 1 5.625 3M6.5 7v10m3-10v10m6-14h5M16 7.75l2-2l2 2m-2-2V21m-2-2l2 2l2-2");
}
</style><path class="k--d_ldvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:building-height"} {...others} />);
}

export default Component;
