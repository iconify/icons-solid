import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e1rlcc78l {
  fill: currentColor;
  d: path("M4 21v-7.558h16V21zm0-8.558V5h3.139q-.012.125-.018.244t-.005.256q0 2.027 1.42 3.456Q9.959 10.385 12 10.385t3.464-1.43q1.42-1.428 1.42-3.455q0-.138-.005-.256T16.86 5H20v7.442zM11.5 8V6h-2V5h2V3h1v2h2v1h-2v2z");
}
</style><path class="e1rlcc78l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:add-row-above-sharp"} {...others} />);
}

export default Component;
