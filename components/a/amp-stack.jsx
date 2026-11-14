import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gloo08h-r {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M15.75 1.75h-7.5q-2.5 0-2.5 2.5v1q0 2.5 2.5 2.5h7.5q2.5 0 2.5-2.5v-1q0-2.5-2.5-2.5M6.125 9h11.75q3.375 0 3.375 3.375v6.5q0 3.375-3.375 3.375H6.125q-3.375 0-3.375-3.375v-6.5Q2.75 9 6.125 9M8.5 12.75q-2.75 0-2.75 2.75t2.75 2.75t2.75-2.75t-2.75-2.75m4.25 2.75q0 2.75 2.75 2.75t2.75-2.75t-2.75-2.75t-2.75 2.75");
}
</style><path class="gloo08h-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:amp-stack"} {...others} />);
}

export default Component;
