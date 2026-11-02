import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qjd5vkbcz {
  fill: currentColor;
  d: path("M3 10V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1m12 6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2Z");
}
</style><path class="qjd5vkbcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:row-minus-fill-sharp"} {...others} />);
}

export default Component;
