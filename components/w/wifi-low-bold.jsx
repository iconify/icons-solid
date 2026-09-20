import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.r4mf2qotf {
  fill: currentColor;
  d: path("M144 204a16 16 0 1 1-16-16a16 16 0 0 1 16 16m31.06-48.7a80 80 0 0 0-94.12 0a12 12 0 1 0 14.13 19.4a56 56 0 0 1 65.86 0a12 12 0 1 0 14.13-19.4");
}
</style><path class="r4mf2qotf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:wifi-low-bold"} {...others} />);
}

export default Component;
