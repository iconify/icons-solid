import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xydg6ntqf {
  fill: currentColor;
  d: path("M15 16h4v-4h-1.5v2.5H15zM5 10h1.5V7.5H9V6H5zm3 11v-2H2V3h20v16h-6v2zm-4-4h16V5H4zm0 0V5z");
}
</style><path class="xydg6ntqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:screenshot-monitor-outline-sharp"} {...others} />);
}

export default Component;
