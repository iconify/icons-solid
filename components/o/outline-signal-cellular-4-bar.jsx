import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g_cyzplpb {
  fill: currentColor;
  d: path("M2 22h20V2z");
}
</style><path class="g_cyzplpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-signal-cellular-4-bar"} {...others} />);
}

export default Component;
