import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eu3xiy_iw {
  fill: currentColor;
  d: path("M2 20V4h8l2 2h10v14zm12-4h2v-2h2v-2h-2v-2h-2v2h-2v2h2z");
}
</style><path class="eu3xiy_iw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:create-new-folder-sharp"} {...others} />);
}

export default Component;
