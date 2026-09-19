import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.l9mrmybba {
  fill: currentColor;
  d: path("M2 32L32 2l29.999 30l-30 30z");
}
</style><path class="l9mrmybba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:large-blue-diamond"} {...others} />);
}

export default Component;
