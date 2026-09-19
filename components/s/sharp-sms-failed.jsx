import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ju72-ipxf {
  fill: currentColor;
  d: path("M22 2H2v20l4-4h16zm-9 12h-2v-2h2zm0-4h-2V6h2z");
}
</style><path class="ju72-ipxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-sms-failed"} {...others} />);
}

export default Component;
