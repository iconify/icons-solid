import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.b9v25bcjt {
  fill: currentColor;
  d: path("M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-.5 2a.5.5 0 0 1 .5-.5h1.793L3.5 5.793zm0 3.207L7.207 3.5h2.586L3.5 9.793zM11.207 3.5H12a.5.5 0 0 1 .5.5v.793L4.793 12.5H4a.5.5 0 0 1-.5-.5v-.793zM12.5 6.207v2.586L8.793 12.5H6.207zm0 4V12a.5.5 0 0 1-.5.5h-1.793z");
}
</style><path class="b9v25bcjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:tab-in-private-16-filled"} {...others} />);
}

export default Component;
