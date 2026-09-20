import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lxlca_sye {
  fill: currentColor;
  d: path("M3 21v-2l4.25-1.225l1.55-13q.1-.75.65-1.263T10.775 3h2.45q.775 0 1.325.512t.65 1.263l1.55 13L21 19v2zm8-3h2V6q0-.425-.288-.712T12 5t-.712.288T11 6z");
}
</style><path class="lxlca_sye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bike-dock-outline"} {...others} />);
}

export default Component;
