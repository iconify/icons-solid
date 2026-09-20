import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.nkol7rbzh {
  fill: currentColor;
  d: path("M13 10.085a1.5 1.5 0 0 1 1 1.415v.5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6.5a1.5 1.5 0 0 1 1-1.415V3.5A1.5 1.5 0 0 1 4.5 2h5A1.5 1.5 0 0 1 11 3.5V10h1V4.085A1.5 1.5 0 0 1 13 5.5zm-3-.792V3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V5h1.086a1.5 1.5 0 0 1 1.06.44zM3 6.5V12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.5a.5.5 0 0 0-.5-.5h-1.586a1.5 1.5 0 0 1-1.06-.44L5.439 6.147A.5.5 0 0 0 5.086 6H3.5a.5.5 0 0 0-.5.5");
}
</style><path class="nkol7rbzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:document-folder-16-regular"} {...others} />);
}

export default Component;
