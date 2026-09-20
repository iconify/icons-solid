import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hhrmpp-ca {
  fill: currentColor;
  d: path("M15 20H3V4h18v10h-2V6H5v12h10zm4 2v-2h-2v-2h2v-2h2v2h2v2h-2v2zM6 15h5v-2H9.5v.5h-2v-3h2v.5H11V9H6zm7 0h5v-2h-1.5v.5h-2v-3h2v.5H18V9h-5z");
}
</style><path class="hhrmpp-ca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:closed-caption-add-outline-sharp"} {...others} />);
}

export default Component;
