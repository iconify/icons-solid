import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k9_e39bvl {
  fill: currentColor;
  d: path("M4 9.6L7.6 6H4Zm0 7L14.575 6H10.4L4 12.425ZM5.4 18H20V6h-2.6ZM2 20V4h20v16Z");
}
</style><path class="k9_e39bvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:privacy-screen-outline-sharp"} {...others} />);
}

export default Component;
