import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wqyjq5bca {
  fill: currentColor;
  d: path("M10 6h4V3a1 1 0 0 1 2 0v3h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-5v3a1 1 0 0 1-2 0v-3H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2V3a1 1 0 0 1 2 0Z");
}
</style><path class="wqyjq5bca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:plug-fill-sharp"} {...others} />);
}

export default Component;
