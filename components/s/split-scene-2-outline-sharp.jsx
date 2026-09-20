import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mo2mxhbpb {
  fill: currentColor;
  d: path("M4 21v-6h2v4h12v-4h2v6zm-2-8v-2h2V3h16v8h2v2zm4-2h12V5H6zm12 8H6zm0-14H6z");
}
</style><path class="mo2mxhbpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:split-scene-2-outline-sharp"} {...others} />);
}

export default Component;
