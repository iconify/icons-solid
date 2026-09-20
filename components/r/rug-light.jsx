import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.k96yc52qc {
  fill: currentColor;
  d: path("M200 18a6 6 0 0 0-6 6v18h-36V24a6 6 0 0 0-12 0v18h-36V24a6 6 0 0 0-12 0v18H62V24a6 6 0 0 0-12 0v208a6 6 0 0 0 12 0v-18h36v18a6 6 0 0 0 12 0v-18h36v18a6 6 0 0 0 12 0v-18h36v18a6 6 0 0 0 12 0V24a6 6 0 0 0-6-6M62 54h132v148H62Zm66 120a6 6 0 0 0 5.14-2.91l24-40a6 6 0 0 0 0-6.18l-24-40a6 6 0 0 0-10.28 0l-24 40a6 6 0 0 0 0 6.18l24 40A6 6 0 0 0 128 174m0-74.34L145 128l-17 28.34L111 128Z");
}
</style><path class="k96yc52qc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:rug-light"} {...others} />);
}

export default Component;
