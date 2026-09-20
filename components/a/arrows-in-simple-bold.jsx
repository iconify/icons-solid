import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.gsnpohf6r {
  fill: currentColor;
  d: path("M216.49 56.48L177 96h19a12 12 0 0 1 0 24h-48a12 12 0 0 1-12-12V60a12 12 0 0 1 24 0v19l39.51-39.52a12 12 0 0 1 17 17ZM108 136H60a12 12 0 0 0 0 24h19l-39.49 39.51a12 12 0 0 0 17 17L96 177v19a12 12 0 0 0 24 0v-48a12 12 0 0 0-12-12");
}
</style><path class="gsnpohf6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrows-in-simple-bold"} {...others} />);
}

export default Component;
