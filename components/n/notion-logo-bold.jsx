import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.l-d7szbvh {
  fill: currentColor;
  d: path("M216 36h-40a12 12 0 0 0 0 24h8v101.28L118.51 42.22A12 12 0 0 0 108 36H40a12 12 0 0 0 0 24h8v136h-8a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24h-8V94.72l65.49 119.06A12 12 0 0 0 148 220h48a12 12 0 0 0 12-12V60h8a12 12 0 0 0 0-24M80.3 60h20.6l74.8 136h-20.6Z");
}
</style><path class="l-d7szbvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:notion-logo-bold"} {...others} />);
}

export default Component;
