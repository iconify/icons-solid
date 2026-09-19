import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k8zwfibnh {
  fill: currentColor;
  d: path("M3 3v18h18V3zm8 16H5v-6h6zm0-8H5V5h6zm8 8h-6v-6h6zm0-8h-6V5h6z");
}
</style><path class="k8zwfibnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-border-all"} {...others} />);
}

export default Component;
