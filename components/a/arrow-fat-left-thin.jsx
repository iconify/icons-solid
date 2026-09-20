import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.xl1wwk-tb {
  fill: currentColor;
  d: path("M208 76h-84V32a4 4 0 0 0-6.83-2.83l-96 96a4 4 0 0 0 0 5.66l96 96A4 4 0 0 0 124 224v-44h84a12 12 0 0 0 12-12V88a12 12 0 0 0-12-12m4 92a4 4 0 0 1-4 4h-88a4 4 0 0 0-4 4v38.34L29.66 128L116 41.66V80a4 4 0 0 0 4 4h88a4 4 0 0 1 4 4Z");
}
</style><path class="xl1wwk-tb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-fat-left-thin"} {...others} />);
}

export default Component;
