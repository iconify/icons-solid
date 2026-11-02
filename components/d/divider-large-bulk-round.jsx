import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oay8kys0m {
  fill: currentColor;
  d: path("M13 3v18a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0");
}
</style><path class="oay8kys0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:divider-large-bulk-round"} {...others} />);
}

export default Component;
