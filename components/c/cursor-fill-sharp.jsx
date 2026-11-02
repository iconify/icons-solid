import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.km_-xmb-s {
  fill: currentColor;
  d: path("M21.316 8.051a1 1 0 0 1 .131 1.843l-4.759 2.38l4.019 4.019a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414 0l-4.019-4.019l-2.38 4.759a1 1 0 0 1-1.843-.131l-6-18a1.001 1.001 0 0 1 1.265-1.265Z");
}
</style><path class="km_-xmb-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cursor-fill-sharp"} {...others} />);
}

export default Component;
