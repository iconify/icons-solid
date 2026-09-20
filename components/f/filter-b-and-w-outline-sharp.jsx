import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e348o2hja {
  fill: currentColor;
  d: path("M21 21H3V3h18zM5 19h7v-8l7 8V5h-7v6z");
}
</style><path class="e348o2hja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:filter-b-and-w-outline-sharp"} {...others} />);
}

export default Component;
