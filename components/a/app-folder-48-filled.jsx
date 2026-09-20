import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.x-n8b540u {
  fill: currentColor;
  d: path("M15.5 12a3.5 3.5 0 0 0-3.5 3.5v4a3.5 3.5 0 0 0 3.5 3.5h4a3.5 3.5 0 0 0 3.5-3.5v-4a3.5 3.5 0 0 0-3.5-3.5zm0 13a3.5 3.5 0 0 0-3.5 3.5v4a3.5 3.5 0 0 0 3.5 3.5h4a3.5 3.5 0 0 0 3.5-3.5v-4a3.5 3.5 0 0 0-3.5-3.5zm13-13a3.5 3.5 0 0 0-3.5 3.5v4a3.5 3.5 0 0 0 3.5 3.5h4a3.5 3.5 0 0 0 3.5-3.5v-4a3.5 3.5 0 0 0-3.5-3.5zm0 13a3.5 3.5 0 0 0-3.5 3.5v4a3.5 3.5 0 0 0 3.5 3.5h4a3.5 3.5 0 0 0 3.5-3.5v-4a3.5 3.5 0 0 0-3.5-3.5zM6 12.25A6.25 6.25 0 0 1 12.25 6h23.5A6.25 6.25 0 0 1 42 12.25v23.5A6.25 6.25 0 0 1 35.75 42h-23.5A6.25 6.25 0 0 1 6 35.75zm6.25-3.75a3.75 3.75 0 0 0-3.75 3.75v23.5a3.75 3.75 0 0 0 3.75 3.75h23.5a3.75 3.75 0 0 0 3.75-3.75v-23.5a3.75 3.75 0 0 0-3.75-3.75z");
}
</style><path class="x-n8b540u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:app-folder-48-filled"} {...others} />);
}

export default Component;
