import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jmyxa7ijf {
  fill: currentColor;
  d: path("M16 20H2V4h14zm2-12h4V4h-4zm0 12h4v-4h-4zm0-6h4v-4h-4z");
}
</style><path class="jmyxa7ijf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-view-sidebar"} {...others} />);
}

export default Component;
