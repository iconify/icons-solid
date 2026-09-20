import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.qu0apzqxp {
  fill: currentColor;
  d: path("m13.294 14.001l.852.853a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708l3.169 3.168l-2.295.775A1.5 1.5 0 0 0 1 7.217v1.566a1.5 1.5 0 0 0 1.018 1.42L4 10.877V12a3 3 0 0 0 5.872.868l3.146 1.067q.138.046.276.066M5 11.215l3.924 1.332A2 2 0 0 1 5 12zm10 1.3q0 .17-.036.328L6.43 4.308l6.591-2.226A1.5 1.5 0 0 1 15 3.503z");
}
</style><path class="qu0apzqxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:megaphone-off-16-filled"} {...others} />);
}

export default Component;
