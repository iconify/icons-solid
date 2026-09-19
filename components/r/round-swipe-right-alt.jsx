import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.alaq30bbk {
  fill: currentColor;
  d: path("M13.9 11a5 5 0 1 0 0 2h4.27l-.88.88a.996.996 0 1 0 1.41 1.41l2.59-2.59a.996.996 0 0 0 0-1.41L18.7 8.7a.996.996 0 1 0-1.41 1.41l.88.89z");
}
</style><path class="alaq30bbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-swipe-right-alt"} {...others} />);
}

export default Component;
