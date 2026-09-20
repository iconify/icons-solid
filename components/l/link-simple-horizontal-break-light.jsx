import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ww8b0fbjy {
  fill: currentColor;
  d: path("M22 128a42 42 0 0 0 42 42h40a6 6 0 0 1 0 12H64a54 54 0 0 1 0-108h40a6 6 0 0 1 0 12H64a42 42 0 0 0-42 42m170-54h-40a6 6 0 0 0 0 12h40a42 42 0 0 1 0 84h-40a6 6 0 0 0 0 12h40a54 54 0 0 0 0-108");
}
</style><path class="ww8b0fbjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:link-simple-horizontal-break-light"} {...others} />);
}

export default Component;
