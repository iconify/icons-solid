import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.yom8oybzz {
  fill: currentColor;
  d: path("M11.379 3a2 2 0 0 1 1.414.586l3.621 3.621A2 2 0 0 1 17 8.621V15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM5 4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9h-3.5A1.5 1.5 0 0 1 11 7.5V4zm7 3.5a.5.5 0 0 0 .5.5h3.283a1 1 0 0 0-.076-.086l-3.621-3.621A1 1 0 0 0 12 4.217z");
}
</style><path class="yom8oybzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:document-square-20-regular"} {...others} />);
}

export default Component;
