import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v03fs2b-j {
  fill: currentColor;
  d: path("M2 9a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v6a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 20H7a5 5 0 0 1-5-5Zm5 0a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm8 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm-6 4H7a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2m8 0h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2");
}
</style><path class="v03fs2b-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:captions-fill-round"} {...others} />);
}

export default Component;
