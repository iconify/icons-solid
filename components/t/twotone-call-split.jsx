import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cdbwu9bnt {
  fill: currentColor;
  d: path("M20 4h-6l2.29 2.29l-2.88 2.88l1.42 1.42l2.88-2.88L20 10zM4 4v6l2.29-2.29l4.71 4.7V20h2v-8.41l-5.29-5.3L10 4z");
}
</style><path class="cdbwu9bnt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-call-split"} {...others} />);
}

export default Component;
