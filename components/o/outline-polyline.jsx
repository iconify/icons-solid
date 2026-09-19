import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qfa8ccc8k {
  fill: currentColor;
  d: path("M15 16v1.26l-6-3v-3.17L11.7 8H16V2h-6v4.9L7.3 10H3v6h5l7 3.5V22h6v-6zM12 4h2v2h-2zM7 14H5v-2h2zm12 6h-2v-2h2z");
}
</style><path class="qfa8ccc8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-polyline"} {...others} />);
}

export default Component;
