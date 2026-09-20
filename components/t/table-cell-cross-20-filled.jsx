import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.yt4jf8bxv {
  fill: currentColor;
  d: path("M13 16a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2h6zm-7-3H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2zm7 0H7V7h6zm3-6a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2V7zm-5-5a2 2 0 0 1 2 2v2H7V4a2 2 0 0 1 2-2z");
}
</style><path class="yt4jf8bxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:table-cell-cross-20-filled"} {...others} />);
}

export default Component;
