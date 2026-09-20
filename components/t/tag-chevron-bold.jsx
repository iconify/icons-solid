import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.oia2scjpx {
  fill: currentColor;
  d: path("m250 121.34l-45.64-68.43A20 20 0 0 0 187.72 44H32a12 12 0 0 0-10 18.66L65.58 128L22 193.34A12 12 0 0 0 32 212h155.72a20 20 0 0 0 16.64-8.91L250 134.66a12 12 0 0 0 0-13.32M185.58 188H54.42L90 134.66a12 12 0 0 0 0-13.32L54.42 68h131.16l40 60Z");
}
</style><path class="oia2scjpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:tag-chevron-bold"} {...others} />);
}

export default Component;
