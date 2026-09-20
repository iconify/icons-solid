import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ye3ydfbrz {
  fill: currentColor;
  d: path("M4 20V4h7.5v16zm8.5-9V4H20v7zm7.5 9h-7.5v-8H20z");
}
</style><path class="ye3ydfbrz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:space-dashboard-sharp"} {...others} />);
}

export default Component;
