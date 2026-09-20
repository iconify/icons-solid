import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ni4j05b7a {
  fill: currentColor;
  d: path("M220 132v76a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h76a12 12 0 0 1 0 24H52v144h144v-72a12 12 0 0 1 24 0m16-72a40 40 0 1 1-40-40a40 40 0 0 1 40 40m-24 0a16 16 0 1 0-16 16a16 16 0 0 0 16-16");
}
</style><path class="ni4j05b7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:notification-bold"} {...others} />);
}

export default Component;
