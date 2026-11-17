import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ezj8b4u-q {
  fill: currentColor;
  d: path("M17.714 9H12a3 3 0 0 0-3 3v9a1 1 0 0 1-1 1a5 5 0 0 1-3.536-1.464A4.98 4.98 0 0 1 3 17v-5.185a5 5 0 0 1 1.707-3.763l4-3.5a5 5 0 0 1 6.586 0l3.08 2.695A1.001 1.001 0 0 1 17.714 9M14.5 16.472V13.5a2.5 2.5 0 1 1 5 0v2.972a3.25 3.25 0 1 1-5 0m2-2.972v3.373a1 1 0 0 1-.333.745a1.25 1.25 0 1 0 1.666 0a1 1 0 0 1-.333-.745V13.5a.5.5 0 0 0-1 0");
}
</style><path class="ezj8b4u-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-thermometer-corner-fill-round"} {...others} />);
}

export default Component;
