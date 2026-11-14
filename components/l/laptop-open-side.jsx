import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w0navhbnm {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.453 4.035q-.799-.481-1.704-.255T2.365 4.805t-.254 1.703l2.298 9.219q.083.331.204.599q-.635.161-1.131.656q-.732.732-.732 1.768q0 2.5 2.5 2.5h13.5q2.5 0 2.5-2.5t-2.5-2.5H8.722q.295-.645.054-1.612L6.478 5.42q-.225-.905-1.025-1.385");
}
</style><path class="w0navhbnm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:laptop-open-side"} {...others} />);
}

export default Component;
