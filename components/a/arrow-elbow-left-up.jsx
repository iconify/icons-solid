import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.i5yo6eldc {
  fill: currentColor;
  d: path("M240 192a8 8 0 0 1-8 8H88a8 8 0 0 1-8-8V67.31l-34.34 34.35a8 8 0 0 1-11.32-11.32l48-48a8 8 0 0 1 11.32 0l48 48a8 8 0 0 1-11.32 11.32L96 67.31V184h136a8 8 0 0 1 8 8");
}
</style><path class="i5yo6eldc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-elbow-left-up"} {...others} />);
}

export default Component;
