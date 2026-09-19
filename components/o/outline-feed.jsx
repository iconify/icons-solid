import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.garwhmtap {
  fill: currentColor;
  d: path("M16 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8zm3 16H5V5h10v4h4zM7 17h10v-2H7zm5-10H7v2h5zm-5 6h10v-2H7z");
}
</style><path class="garwhmtap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-feed"} {...others} />);
}

export default Component;
