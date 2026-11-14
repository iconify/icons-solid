import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w9o3w454u {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.75 12q0-4.246 3.002-7.248T12 1.75t7.248 3.002T22.25 12t-3.002 7.248T12 22.25t-7.248-3.002T1.75 12M9 7.5Q7.5 7.5 7.5 9T9 10.5T10.5 9T9 7.5M13.5 9q0 1.5 1.5 1.5T16.5 9T15 7.5T13.5 9M9 13.5q-1.5 0-1.5 1.5T9 16.5t1.5-1.5T9 13.5m4.5 1.5q0 1.5 1.5 1.5t1.5-1.5t-1.5-1.5t-1.5 1.5");
}
</style><path class="w9o3w454u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:category-auto-parts"} {...others} />);
}

export default Component;
