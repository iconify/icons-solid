import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.h73hyor4x {
  fill: currentColor;
  d: path("M10.5 8.25c0-.966.784-1.75 1.75-1.75H24v9.25A4.25 4.25 0 0 0 28.25 20h9.25v19.75a1.75 1.75 0 0 1-1.75 1.75h-23.5a1.75 1.75 0 0 1-1.75-1.75zm25.982 9.25H28.25a1.75 1.75 0 0 1-1.75-1.75V7.518zM12.25 4A4.25 4.25 0 0 0 8 8.25v31.5A4.25 4.25 0 0 0 12.25 44h23.5A4.25 4.25 0 0 0 40 39.75V19.243a4.25 4.25 0 0 0-1.245-3.006L27.763 5.245A4.25 4.25 0 0 0 24.757 4z");
}
</style><path class="h73hyor4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:document-48-regular"} {...others} />);
}

export default Component;
