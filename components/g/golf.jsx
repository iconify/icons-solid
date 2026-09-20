import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ajoobfbpf {
  fill: currentColor;
  d: path("M176 100a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-44 20a12 12 0 1 0 12 12a12 12 0 0 0-12-12m84-24a88 88 0 1 1-88-88a88.1 88.1 0 0 1 88 88m-16 0a72 72 0 1 0-72 72a72.08 72.08 0 0 0 72-72m-34.86 96.53C152 197.56 139.85 200 128 200s-24-2.44-37.14-7.47a8 8 0 1 0-5.72 14.94a126 126 0 0 0 34.86 8.21V248a8 8 0 0 0 16 0v-32.32a126 126 0 0 0 34.86-8.21a8 8 0 1 0-5.72-14.94");
}
</style><path class="ajoobfbpf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:golf"} {...others} />);
}

export default Component;
