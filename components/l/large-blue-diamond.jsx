import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.uktz89k5k {
  fill: var(--svg-color--1b75bb, #1b75bb);
  d: path("M63 32L32 62.999L1 32L32 1");
}
</style><path class="uktz89k5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-v1:large-blue-diamond"} {...others} />);
}

export default Component;
