import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.k22gzjgnf {
  fill: currentColor;
  d: path("M4.75 12a.75.75 0 0 1 .743.64l.008.11v2.503a.75.75 0 0 1-1.493.11L4 15.254V12.75a.75.75 0 0 1 .75-.75");
}
</style><path class="k22gzjgnf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:cellular-data-5-20-filled"} {...others} />);
}

export default Component;
