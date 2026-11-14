import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zurfq9bwt {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.75 12q0-4.246 3.002-7.248T12 1.75t7.248 3.002T22.25 12t-3.002 7.248T12 22.25t-7.248-3.002T1.75 12M9 6q-4 0-4 4t4 4q2 0 3-1q0 3.5 3.5 3.5T19 13t-3.5-3.5q-1.633 0-2.504.762Q13 10.133 13 10q0-4-4-4");
}
</style><path class="zurfq9bwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:chart-circle-packing"} {...others} />);
}

export default Component;
