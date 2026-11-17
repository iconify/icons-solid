import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vfiatbcck {
  fill: currentColor;
  d: path("M3 10V6a4 4 0 0 1 8 0v4Zm17.93 2A7.02 7.02 0 0 1 15 17.93V19a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3v-1.082A6.01 6.01 0 0 1 3 12Z");
}
</style><path class="vfiatbcck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:toilet-fill-round"} {...others} />);
}

export default Component;
