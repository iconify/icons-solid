import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.c64588blm {
  fill: currentColor;
  d: path("M4 5.5A1.5 1.5 0 0 1 5.5 4H8v3h4V3H5.5A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17H12v-4H8v3H5.5A1.5 1.5 0 0 1 4 14.5zM14.5 17H13v-4h4v1.5a2.5 2.5 0 0 1-2.5 2.5M13 8v4h4V8zm-5 4h4V8H8zm9-5h-4V3h1.5A2.5 2.5 0 0 1 17 5.5z");
}
</style><path class="c64588blm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:table-freeze-column-20-filled"} {...others} />);
}

export default Component;
