import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ivivv4bvk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 10c6 0 10.5 4.5 10.5 10.5C14.5 20.5 10 16 10 10m0 0L8 8m2 2l6 6M2.75 11Q4.5 3 13 3.5");
}
</style><path class="ivivv4bvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:leaf-single-fall"} {...others} />);
}

export default Component;
