import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tmvxeob3y {
  fill: currentColor;
  d: path("M10 18v-2h4v2zm-4-5v-2h12v2zM3 8V6h18v2z");
}
</style><path class="tmvxeob3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:filter-list-sharp"} {...others} />);
}

export default Component;
