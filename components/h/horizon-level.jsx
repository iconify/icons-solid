import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qt4jux4me {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.25 6.75h15.5q1.036 0 1.768.732t.732 1.768v5.5q0 1.036-.732 1.768t-1.768.732H4.25q-2.5 0-2.5-2.5v-5.5q0-2.5 2.5-2.5m10 2.75h-4.5q-2.5 0-2.5 2.5q0 1.036.732 1.768t1.768.732h4.5q1.036 0 1.768-.732T16.75 12q0-2.5-2.5-2.5");
}
</style><path class="qt4jux4me"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:horizon-level"} {...others} />);
}

export default Component;
