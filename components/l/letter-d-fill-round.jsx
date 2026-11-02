import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gfbunacni {
  fill: currentColor;
  d: path("M7 3h5a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 16h4a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4H8Z");
}
</style><path class="gfbunacni"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:letter-d-fill-round"} {...others} />);
}

export default Component;
