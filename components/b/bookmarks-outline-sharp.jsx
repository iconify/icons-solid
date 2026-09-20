import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dnm9s967p {
  fill: currentColor;
  d: path("M5 21V6.846h10.289V21l-5.145-2.654zm1-1.602l4.154-2.17l4.135 2.17V7.846H6zm12-1.956V4H7.789V3H19v14.442zM6 7.846h8.289z");
}
</style><path class="dnm9s967p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:bookmarks-outline-sharp"} {...others} />);
}

export default Component;
