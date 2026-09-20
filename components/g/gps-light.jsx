import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.gc9jmjsik {
  fill: currentColor;
  d: path("M240 122h-26.23A86.12 86.12 0 0 0 134 42.23V16a6 6 0 0 0-12 0v26.23A86.12 86.12 0 0 0 42.23 122H16a6 6 0 0 0 0 12h26.23A86.12 86.12 0 0 0 122 213.77V240a6 6 0 0 0 12 0v-26.23A86.12 86.12 0 0 0 213.77 134H240a6 6 0 0 0 0-12m-112 80a74 74 0 1 1 74-74a74.09 74.09 0 0 1-74 74");
}
</style><path class="gc9jmjsik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:gps-light"} {...others} />);
}

export default Component;
