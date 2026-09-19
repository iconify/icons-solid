import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.h748ltbds {
  fill: var(--svg-color--fbb11c, #fbb11c);
  d: path("M32 29L42 1L12 35h20L22 63l30-34");
}
</style><path class="h748ltbds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-v1:high-voltage"} {...others} />);
}

export default Component;
