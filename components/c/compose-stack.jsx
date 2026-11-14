import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uktdjmbiu {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.75 2.75h12.5q1.036 0 1.768.732t.732 1.768q0 2.5-2.5 2.5H5.75q-2.5 0-2.5-2.5q0-1.036.732-1.768T5.75 2.75m12.5 6.75H5.75q-2.5 0-2.5 2.5q0 1.036.732 1.768t1.768.732h12.5q1.036 0 1.768-.732T20.75 12q0-2.5-2.5-2.5m-12.5 6.75h12.5q2.5 0 2.5 2.5t-2.5 2.5H5.75q-2.5 0-2.5-2.5q0-1.036.732-1.768t1.768-.732");
}
</style><path class="uktdjmbiu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:compose-stack"} {...others} />);
}

export default Component;
