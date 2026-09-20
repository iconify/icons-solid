import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rqa_97bdz {
  fill: currentColor;
  d: path("M5 21V6.846h10.289V21l-5.145-2.654zm13-3.558V4H7.789V3H19v14.442z");
}
</style><path class="rqa_97bdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:bookmarks-sharp"} {...others} />);
}

export default Component;
