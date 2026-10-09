import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vk34isnok {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14V5H5zm0 0V5h14v14zm5.5-2.5h4v-9h-5v5h4v3h-3zm3-5h-3v-3h3z");
}
</style><path class="vk34isnok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:looks-9-sharp"} {...others} />);
}

export default Component;
