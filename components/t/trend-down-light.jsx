import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.hrhi482vp {
  fill: currentColor;
  d: path("M238 128v64a6 6 0 0 1-6 6h-64a6 6 0 0 1 0-12h49.52L136 104.49l-35.76 35.75a6 6 0 0 1-8.48 0l-72-72a6 6 0 0 1 8.48-8.48L96 127.51l35.76-35.75a6 6 0 0 1 8.48 0L226 177.52V128a6 6 0 0 1 12 0");
}
</style><path class="hrhi482vp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:trend-down-light"} {...others} />);
}

export default Component;
