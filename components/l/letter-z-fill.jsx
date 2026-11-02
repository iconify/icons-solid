import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r8vghd45x {
  fill: currentColor;
  d: path("M17 3a1 1 0 0 1 .848 1.53L8.804 19H17a1 1 0 0 1 0 2H7a1 1 0 0 1-.848-1.53L15.196 5H7a1 1 0 0 1 0-2Z");
}
</style><path class="r8vghd45x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:letter-z-fill"} {...others} />);
}

export default Component;
