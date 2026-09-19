import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qyip1_bgz {
  fill: currentColor;
  d: path("M22 4H2.01v16H22zm-2 4l-8 5l-8-5V6l8 5l8-5z");
}
</style><path class="qyip1_bgz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-local-post-office"} {...others} />);
}

export default Component;
