import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.p-3-tdb8x {
  fill: currentColor;
  d: path("M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3zM13 6.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zm-3 0a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0zm-3 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0z");
}
</style><path class="p-3-tdb8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:textbox-vertical-20-filled"} {...others} />);
}

export default Component;
