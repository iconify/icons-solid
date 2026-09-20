import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.c_uuhybeh {
  fill: currentColor;
  d: path("M192 80v96a8 8 0 0 1-8 8h-56v40a8 8 0 0 1-13.66 5.66l-96-96a8 8 0 0 1 0-11.32l96-96A8 8 0 0 1 128 32v40h56a8 8 0 0 1 8 8m24-8a8 8 0 0 0-8 8v96a8 8 0 0 0 16 0V80a8 8 0 0 0-8-8");
}
</style><path class="c_uuhybeh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-fat-line-left-fill"} {...others} />);
}

export default Component;
