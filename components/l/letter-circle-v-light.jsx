import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.oeuybxb_i {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m37.57-119.77l-32 80a6 6 0 0 1-11.14 0l-32-80a6 6 0 1 1 11.14-4.46L128 159.84l26.43-66.07a6 6 0 0 1 11.14 4.46");
}
</style><path class="oeuybxb_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:letter-circle-v-light"} {...others} />);
}

export default Component;
