import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.edn3xqznk {
  fill: currentColor;
  d: path("m19.589 21.523l-5.108-5.108V21h-6V10.416L2.304 4.239l.708-.708l17.284 17.284zM9.48 20h4v-4.584l-4-4zm5-7.85l-1-1v-.75l2-3v-.9H8.83l-1-1h7.65V4H7.216v.885L6.48 4.15V3h10v4.692l-2 3zm-2.633-2.633");
}
</style><path class="edn3xqznk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:flashlight-off-outline-sharp"} {...others} />);
}

export default Component;
