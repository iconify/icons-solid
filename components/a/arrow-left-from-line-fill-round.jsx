import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.swav2ec8k {
  fill: currentColor;
  d: path("M21 18a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0ZM8.707 8.707L6.414 11H16a1 1 0 0 1 0 2H6.414l2.293 2.293a.999.999 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a.999.999 0 1 1 1.414 1.414");
}
</style><path class="swav2ec8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-left-from-line-fill-round"} {...others} />);
}

export default Component;
