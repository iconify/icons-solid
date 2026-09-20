import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.v3metlb-l {
  fill: currentColor;
  d: path("M213.66 186.34A8 8 0 0 1 208 200H48a8 8 0 0 1-5.66-13.66l80-80a8 8 0 0 1 11.32 0ZM48 80h160a8 8 0 0 0 0-16H48a8 8 0 0 0 0 16");
}
</style><path class="v3metlb-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:caret-line-up-fill"} {...others} />);
}

export default Component;
