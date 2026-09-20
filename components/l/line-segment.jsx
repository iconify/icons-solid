import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ok7vq0b0a {
  fill: currentColor;
  d: path("M214.64 41.36a32 32 0 0 0-50.2 38.89l-84.19 84.19a32.06 32.06 0 0 0-38.89 4.94a32 32 0 1 0 50.2 6.37l84.19-84.19a32 32 0 0 0 38.89-50.2m-139.33 162a16 16 0 0 1-22.64-22.64a16 16 0 0 1 22.63 0a16 16 0 0 1 .01 22.61Zm128-128a16 16 0 1 1 0-22.63a16 16 0 0 1 .02 22.57Z");
}
</style><path class="ok7vq0b0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:line-segment"} {...others} />);
}

export default Component;
