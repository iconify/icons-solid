import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ii27vibnr {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M19.75 1.75h-4.5q-2.5 0-2.5 2.5v3q0 1.036.732 1.768t1.768.732h4.5q1.036 0 1.768-.732t.732-1.768v-3q0-1.036-.732-1.768T19.75 1.75m-11.25 1q1.743 0 2.225 1.807l.753 3.011l.007.035q.32 1.595-1.069 2.521l-.943.628q1.372 2.482 3.77 3.781l.633-.949q.926-1.389 2.521-1.069l.035.007l3 .75q1.818.485 1.818 2.228v3q0 2.75-2.75 2.75q-6.311 0-11.03-4.72Q2.75 11.811 2.75 5.5q0-2.75 2.75-2.75z");
}
</style><path class="ii27vibnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:reference-check"} {...others} />);
}

export default Component;
