import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rnkwsrmbb {
  fill: currentColor;
  d: path("M11 19v-6.346L4.95 5h14.1L13 12.654V19z");
}
</style><path class="rnkwsrmbb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:filter-alt-sharp"} {...others} />);
}

export default Component;
