import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sxi-_cbaw {
  fill: currentColor;
  d: path("M2 13v-2h20v2zm5-3V7h10v3zm0 7v-3h10v3z");
}
</style><path class="sxi-_cbaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:align-center-outline"} {...others} />);
}

export default Component;
