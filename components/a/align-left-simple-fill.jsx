import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.h36lmjz7t {
  fill: currentColor;
  d: path("M40 56v144a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0m184 24H72a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h152a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16");
}
</style><path class="h36lmjz7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:align-left-simple-fill"} {...others} />);
}

export default Component;
