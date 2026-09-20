import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m1c6bpbxo {
  fill: currentColor;
  d: path("M6.77 14.692h.884V9.308h-2.27v.884H6.77zm2.346 0H13V9.308H9.116zm.884-.884v-3.616h2.116v3.616zm4.462.884h.884v-2.365l2.289 2.365h1.211l-2.634-2.73l2.634-2.654h-1.173l-2.327 2.327V9.308h-.884zM4 20V4h16v16z");
}
</style><path class="m1c6bpbxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:10k-sharp"} {...others} />);
}

export default Component;
