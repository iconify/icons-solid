import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zqj_6vbvv {
  fill: currentColor;
  d: path("M22 7h-9v2h9zm0 8h-9v2h9zM5.54 11L2 7.46l1.41-1.41l2.12 2.12l4.24-4.24l1.41 1.41zm0 8L2 15.46l1.41-1.41l2.12 2.12l4.24-4.24l1.41 1.41z");
}
</style><path class="zqj_6vbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-checklist"} {...others} />);
}

export default Component;
