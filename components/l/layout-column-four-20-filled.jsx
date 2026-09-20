import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.dekpsje6n {
  fill: currentColor;
  d: path("M14 17a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM13 3h-2.5v14H13zM7 3h2.5v14H7zM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3z");
}
</style><path class="dekpsje6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:layout-column-four-20-filled"} {...others} />);
}

export default Component;
