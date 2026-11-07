import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ngv_kumov {
  fill: currentColor;
  d: path("M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v5a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Zm11.403.862l-2.256-1.58A2 2 0 0 0 9 8.921v3.158a2 2 0 0 0 3.147 1.639l2.256-1.58a1.997 1.997 0 0 0 0-3.276M9 19h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2");
}
</style><path class="ngv_kumov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:monitor-play-fill-round"} {...others} />);
}

export default Component;
