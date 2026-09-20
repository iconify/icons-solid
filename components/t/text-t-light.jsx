import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.b2w40juaa {
  fill: currentColor;
  d: path("M206 56v32a6 6 0 0 1-12 0V62h-60v132h26a6 6 0 0 1 0 12H96a6 6 0 0 1 0-12h26V62H62v26a6 6 0 0 1-12 0V56a6 6 0 0 1 6-6h144a6 6 0 0 1 6 6");
}
</style><path class="b2w40juaa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:text-t-light"} {...others} />);
}

export default Component;
