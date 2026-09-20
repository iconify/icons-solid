import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r_v_tobwx {
  fill: currentColor;
  d: path("M8 16h12V4h-2v7l-2.5-1.5L13 11V4H8zm-2 2V2h16v16zm-4 4V6h2v14h14v2zM8 4v12zm5 7l2.5-1.5L18 11l-2.5-1.5z");
}
</style><path class="r_v_tobwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:collections-bookmark-outline-sharp"} {...others} />);
}

export default Component;
