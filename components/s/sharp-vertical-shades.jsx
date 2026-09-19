import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yvc_kgbsu {
  fill: currentColor;
  d: path("M20 19V3H4v16H2v2h20v-2zm-10 0V5h4v14z");
}
</style><path class="yvc_kgbsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-vertical-shades"} {...others} />);
}

export default Component;
