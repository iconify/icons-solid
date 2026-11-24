import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.azgff7beg {
  fill: currentColor;
  d: path("M22 5v3H2V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1M2 10h8v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Zm16 4v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0m-1 6h.01a1 1 0 0 1 0 2H17a1 1 0 0 1 0-2");
}
</style><path class="azgff7beg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:credit-card-warning-corner-fill-sharp"} {...others} />);
}

export default Component;
