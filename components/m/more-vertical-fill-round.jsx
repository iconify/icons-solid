import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hm5a0s0xs {
  fill: currentColor;
  d: path("M10.158 5.221a2 2 0 1 1 3.684 1.558a2 2 0 0 1-3.684-1.558m0 6a2 2 0 1 1 3.684 1.558a2 2 0 0 1-3.684-1.558m0 6a2 2 0 1 1 3.684 1.558a2 2 0 0 1-3.684-1.558");
}
</style><path class="hm5a0s0xs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:more-vertical-fill-round"} {...others} />);
}

export default Component;
