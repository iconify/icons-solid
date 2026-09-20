import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.x1ribx33c {
  fill: currentColor;
  d: path("M14 2v8a2 2 0 0 0 2 2h8v12a2 2 0 0 1-2 2h-9.4A7.5 7.5 0 0 0 4 13.865V4a2 2 0 0 1 2-2zm1.5.5V10a.5.5 0 0 0 .5.5h7.5zm-1.5 18a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-6-4a.5.5 0 0 0-1 0V20H3.5a.5.5 0 0 0 0 1H7v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H8z");
}
</style><path class="x1ribx33c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:document-add-28-filled"} {...others} />);
}

export default Component;
