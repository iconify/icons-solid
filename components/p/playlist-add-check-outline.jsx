import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nnwpx0-vt {
  fill: currentColor;
  d: path("M3 16v-2h8v2zm0-4v-2h12v2zm0-4V6h12v2zm13.35 11l-3.55-3.55l1.4-1.4l2.15 2.1l4.25-4.25l1.4 1.45z");
}
</style><path class="nnwpx0-vt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:playlist-add-check-outline"} {...others} />);
}

export default Component;
