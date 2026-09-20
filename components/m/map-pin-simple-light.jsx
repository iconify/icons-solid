import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ephcfobhf {
  fill: currentColor;
  d: path("M182 72a54 54 0 1 0-60 53.66V232a6 6 0 0 0 12 0V125.66A54.07 54.07 0 0 0 182 72m-54 42a42 42 0 1 1 42-42a42 42 0 0 1-42 42");
}
</style><path class="ephcfobhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:map-pin-simple-light"} {...others} />);
}

export default Component;
