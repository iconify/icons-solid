import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dr3_gg1xw {
  fill: currentColor;
  d: path("M22 2H2v20h20zM8 20H4v-4h4zm0-6H4v-4h4zm0-6H4V4h4zm6 12h-4v-4h4zm0-6h-4v-4h4zm0-6h-4V4h4zm6 12h-4v-4h4zm0-6h-4v-4h4zm0-6h-4V4h4z");
}
</style><path class="dr3_gg1xw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-grid-on"} {...others} />);
}

export default Component;
