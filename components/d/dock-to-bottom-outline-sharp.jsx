import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i3ppf8b7z {
  fill: currentColor;
  d: path("M5 19h14v-3H5zm0-5h14V5H5zm0 2v3zm-2 5V3h18v18z");
}
</style><path class="i3ppf8b7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:dock-to-bottom-outline-sharp"} {...others} />);
}

export default Component;
