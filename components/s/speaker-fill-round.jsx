import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cbw5gmbdk {
  fill: currentColor;
  d: path("M9 2h6a5 5 0 0 1 5 5v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 15 22H9a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m3.01 4H12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M8 14a4 4 0 1 0 8 0a4 4 0 0 0-8 0");
}
</style><path class="cbw5gmbdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:speaker-fill-round"} {...others} />);
}

export default Component;
