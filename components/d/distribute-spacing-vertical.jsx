import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x9azt6bnx {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18.75 4.75v.5q0 1.036-.732 1.768t-1.768.732h-8.5q-2.5 0-2.5-2.5v-.5q0-2.5 2.5-2.5h8.5q1.036 0 1.768.732t.732 1.768m2.5 7.5v-.5q0-2.5-2.5-2.5H5.25q-1.036 0-1.768.732T2.75 11.75v.5q0 2.5 2.5 2.5h13.5q2.5 0 2.5-2.5m-4.5 6.5v.5q0 1.036-.732 1.768t-1.768.732h-4.5q-1.036 0-1.768-.732T7.25 19.25v-.5q0-2.5 2.5-2.5h4.5q2.5 0 2.5 2.5");
}
</style><path class="x9azt6bnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:distribute-spacing-vertical"} {...others} />);
}

export default Component;
