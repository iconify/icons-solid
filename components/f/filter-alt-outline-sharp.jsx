import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jii44-bis {
  fill: currentColor;
  d: path("M11 19v-6.346L4.95 5h14.1L13 12.654V19zm1-6.7L16.95 6h-9.9zm0 0");
}
</style><path class="jii44-bis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:filter-alt-outline-sharp"} {...others} />);
}

export default Component;
