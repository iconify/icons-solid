import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.mn3p6wbzw {
  fill: currentColor;
  d: path("M196 136a4 4 0 0 1-4 4H64a4 4 0 0 1 0-8h128a4 4 0 0 1 4 4m36-52H24a4 4 0 0 0 0 8h208a4 4 0 0 0 0-8m-80 96h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8");
}
</style><path class="mn3p6wbzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:funnel-simple-thin"} {...others} />);
}

export default Component;
