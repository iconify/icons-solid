import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ml7ndjqcm {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18.25 4.25h.5q2.5 0 2.5 2.5v12q0 2.5-2.5 2.5h-.5q-2.5 0-2.5-2.5v-12q0-2.5 2.5-2.5m-6 4.5h-.5q-2.5 0-2.5 2.5v7.5q0 2.5 2.5 2.5h.5q2.5 0 2.5-2.5v-7.5q0-2.5-2.5-2.5m-7 4.5h.5q1.036 0 1.768.732t.732 1.768v3q0 1.036-.732 1.768t-1.768.732h-.5q-2.5 0-2.5-2.5v-3q0-1.036.732-1.768t1.768-.732");
}
</style><path class="ml7ndjqcm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:access-level"} {...others} />);
}

export default Component;
