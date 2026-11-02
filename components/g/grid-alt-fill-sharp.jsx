import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kat6uwb1r {
  fill: currentColor;
  d: path("M8 3v5H3V4a1 1 0 0 1 1-1Zm2 5V3h4v5Zm6-5h4a1 1 0 0 1 1 1v4h-5ZM3 10h5v4H3Zm11 0v4h-4v-4Zm7 4h-5v-4h5ZM3 16h5v5H4a1 1 0 0 1-1-1Zm7 5v-5h4v5Zm6 0v-5h5v4a1 1 0 0 1-1 1Z");
}
</style><path class="kat6uwb1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:grid-alt-fill-sharp"} {...others} />);
}

export default Component;
