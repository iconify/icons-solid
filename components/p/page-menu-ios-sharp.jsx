import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p9h19ku1c {
  fill: currentColor;
  d: path("M3 21v-2h12v2zm0-4v-2h18v2zm0-4V3h18v10z");
}
</style><path class="p9h19ku1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:page-menu-ios-sharp"} {...others} />);
}

export default Component;
