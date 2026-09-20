import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wvo3-_-mx {
  fill: currentColor;
  d: path("M9 16h8.5a1 1 0 0 1 .117 1.993L17.5 18H9a1 1 0 0 1-.117-1.993zh8.5zm-6.707-4.707l2-2a1 1 0 0 1 1.497 1.32l-.083.094L4.414 12l1.293 1.293a1 1 0 0 1-1.32 1.497l-.094-.083l-2-2a1 1 0 0 1-.083-1.32zl2-2zM9 11l11.5-.001a1 1 0 0 1 .117 1.993L20.5 13H9a1 1 0 0 1-.117-1.993zl11.5-.001zm0-5h8.5a1 1 0 0 1 .117 1.993L17.5 8H9a1 1 0 0 1-.117-1.993zh8.5z");
}
</style><path class="wvo3-_-mx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-indent-decrease-24-filled"} {...others} />);
}

export default Component;
