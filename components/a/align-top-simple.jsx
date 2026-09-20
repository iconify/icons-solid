import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.alfa5fb7v {
  fill: currentColor;
  d: path("M208 32a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8m-32 40v152a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16V72a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16m-16 0H96v152h64Z");
}
</style><path class="alfa5fb7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:align-top-simple"} {...others} />);
}

export default Component;
