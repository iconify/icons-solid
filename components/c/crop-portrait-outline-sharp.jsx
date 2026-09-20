import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ws6j20laj {
  fill: currentColor;
  d: path("M5 21V3h14v18zm1-1h12V4H6zm0 0V4z");
}
</style><path class="ws6j20laj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:crop-portrait-outline-sharp"} {...others} />);
}

export default Component;
