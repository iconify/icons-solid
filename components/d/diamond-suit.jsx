import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.lypxc0e1x {
  fill: var(--svg-color--ff5a79, #ff5a79);
  d: path("M2.018 32L32 2.02L61.98 32L32 61.981z");
}
</style><path class="lypxc0e1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:diamond-suit"} {...others} />);
}

export default Component;
