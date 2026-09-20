import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.gsim-eb8m {
  fill: currentColor;
  d: path("M5 16a2 2 0 0 0 2 2h3.257A5.48 5.48 0 0 1 9 14.5c0-.819.179-1.596.5-2.294V7.207L8.354 8.354a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L10.5 7.207v3.518A5.49 5.49 0 0 1 15 9.022V4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2zm14-1.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.146-1.854a.5.5 0 0 0-.708 0L13.5 15.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708");
}
</style><path class="gsim-eb8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:phone-update-checkmark-20-filled"} {...others} />);
}

export default Component;
