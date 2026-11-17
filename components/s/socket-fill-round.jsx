import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vlfyvo42h {
  fill: currentColor;
  d: path("M2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22H7a5 5 0 0 1-5-5Zm10 10a5 5 0 1 0-.001-10.001A5 5 0 0 0 12 17m-4-5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 8 12m5 0a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 13 12");
}
</style><path class="vlfyvo42h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:socket-fill-round"} {...others} />);
}

export default Component;
