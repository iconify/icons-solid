import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.gghbdp9yv {
  fill: currentColor;
  d: path("M160 36a92.09 92.09 0 0 0-81 48.36A68 68 0 1 0 72 220h88a92 92 0 0 0 0-184m0 160H72a44 44 0 0 1-1.82-88A92 92 0 0 0 68 128a12 12 0 0 0 24 0a68 68 0 1 1 68 68m40.49-92.49a12 12 0 0 1 0 17l-48 48a12 12 0 0 1-17 0l-24-24a12 12 0 1 1 17-17L144 143l39.51-39.52a12 12 0 0 1 16.98.03");
}
</style><path class="gghbdp9yv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:cloud-check-bold"} {...others} />);
}

export default Component;
