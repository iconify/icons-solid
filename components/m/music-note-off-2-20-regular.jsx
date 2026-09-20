import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.jqwaol9wf {
  fill: currentColor;
  d: path("M2.854 2.146a.5.5 0 1 0-.708.708L7 7.707V13.5a2.5 2.5 0 1 0 1 2V8.707l3.414 3.414a2.5 2.5 0 0 0 3.465 3.465l2.267 2.268a.5.5 0 0 0 .708-.708zm11.293 12.708a1.5 1.5 0 0 1-2-2zM5.5 14a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m8-3q-.18 0-.354.025l2.83 2.829q.023-.174.024-.354V3.18a1 1 0 0 0-1.298-.954l-7 2.187a1 1 0 0 0-.617.55L8 5.88v-.511l7-2.188v1.952L9.098 6.977l.798.798L15 6.18v5.32a2.5 2.5 0 0 0-1.5-.5");
}
</style><path class="jqwaol9wf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:music-note-off-2-20-regular"} {...others} />);
}

export default Component;
