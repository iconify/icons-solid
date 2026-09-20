import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xiaypfbxd {
  fill: currentColor;
  d: path("M2 11.6L9.6 4H2Zm0 7L16.575 4H12.4L2 14.425ZM3.4 20H22V4h-2.6Z");
}
</style><path class="xiaypfbxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:privacy-screen-sharp"} {...others} />);
}

export default Component;
