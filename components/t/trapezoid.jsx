import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fyu2z3bfn {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.914 4.25h6.172q2.461-.001 3.214 2.343l2.812 8.75q.525 1.633-.486 3.02t-2.727 1.387H6.101q-1.716 0-2.727-1.387t-.486-3.02L5.7 6.593q.753-2.344 3.214-2.343");
}
</style><path class="fyu2z3bfn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:trapezoid"} {...others} />);
}

export default Component;
