import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.zpcme9b7m {
  fill: currentColor;
  d: path("M200 60H32a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h168a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m12 116a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h168a12 12 0 0 1 12 12Zm-72-80v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m-40 0v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m-40 0v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m192 0v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0");
}
</style><path class="zpcme9b7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:battery-high-thin"} {...others} />);
}

export default Component;
