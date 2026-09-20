import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ol9ih5bmg {
  fill: currentColor;
  d: path("M216 168h-9.29L185.54 48H192a8 8 0 0 0 0-16H64a8 8 0 0 0 0 16h6.46L49.29 168H40a8 8 0 0 0 0 16h80v56a8 8 0 0 0 16 0v-56h80a8 8 0 0 0 0-16M86.71 48h82.58l21.17 120H65.54Z");
}
</style><path class="ol9ih5bmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:push-pin-simple"} {...others} />);
}

export default Component;
