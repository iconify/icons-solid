import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.br03pcbul {
  fill: currentColor;
  d: path("M238 56v64a6 6 0 0 1-12 0V70.48l-85.76 85.76a6 6 0 0 1-8.48 0L96 120.49l-67.76 67.75a6 6 0 0 1-8.48-8.48l72-72a6 6 0 0 1 8.48 0L136 143.51L217.52 62H168a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6");
}
</style><path class="br03pcbul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:trend-up-light"} {...others} />);
}

export default Component;
