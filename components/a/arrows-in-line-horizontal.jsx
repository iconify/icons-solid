import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.bigd8ebvc {
  fill: currentColor;
  d: path("M136 40v176a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0M69.66 90.34a8 8 0 0 0-11.32 11.32L76.69 120H16a8 8 0 0 0 0 16h60.69l-18.35 18.34a8 8 0 0 0 11.32 11.32l32-32a8 8 0 0 0 0-11.32ZM240 120h-60.69l18.35-18.34a8 8 0 0 0-11.32-11.32l-32 32a8 8 0 0 0 0 11.32l32 32a8 8 0 0 0 11.32-11.32L179.31 136H240a8 8 0 0 0 0-16");
}
</style><path class="bigd8ebvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrows-in-line-horizontal"} {...others} />);
}

export default Component;
