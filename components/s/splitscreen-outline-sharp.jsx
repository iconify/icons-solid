import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xxib8db2j {
  fill: currentColor;
  d: path("M4 10.635V4h16v6.635zm1-1h14V5H5zM4 20v-6.615h16V20zm1-1h14v-4.615H5zm0-9.365V5zM5 19v-4.615z");
}
</style><path class="xxib8db2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:splitscreen-outline-sharp"} {...others} />);
}

export default Component;
