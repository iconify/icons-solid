import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.spts5jbcu {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17 1.75H7q-1.76 0-3.005 1.245T2.75 6v12q0 1.76 1.245 3.005T7 22.25h10q1.76 0 3.005-1.245T21.25 18V6q0-1.76-1.245-3.005T17 1.75m-7.5 8h5q2.25 0 2.25 2.25t-2.25 2.25h-5q-2.25 0-2.25-2.25T9.5 9.75");
}
</style><path class="spts5jbcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:cabinet-latch"} {...others} />);
}

export default Component;
