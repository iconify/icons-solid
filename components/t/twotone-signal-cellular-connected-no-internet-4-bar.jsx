import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mpw9dxmnm {
  fill: currentColor;
  d: path("M20 18h2v-8h-2zm0 4h2v-2h-2zM2 22h16V8h4V2z");
}
</style><path class="mpw9dxmnm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-signal-cellular-connected-no-internet-4-bar"} {...others} />);
}

export default Component;
