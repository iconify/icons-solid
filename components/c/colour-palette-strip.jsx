import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yfl3qw2sa {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.25 5.25h1q2.5 0 2.5 2.5v8.5q0 1.036-.732 1.768t-1.768.732h-1q-1.036 0-1.768-.732T1.75 16.25v-8.5q0-2.5 2.5-2.5m7.25 0h1q1.036 0 1.768.732T15 7.75v8.5q0 1.036-.732 1.768t-1.768.732h-1q-1.036 0-1.768-.732T9 16.25v-8.5q0-2.5 2.5-2.5m8.25 0h-1q-2.5 0-2.5 2.5v8.5q0 1.036.732 1.768t1.768.732h1q1.036 0 1.768-.732t.732-1.768v-8.5q0-1.036-.732-1.768T19.75 5.25");
}
</style><path class="yfl3qw2sa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:colour-palette-strip"} {...others} />);
}

export default Component;
