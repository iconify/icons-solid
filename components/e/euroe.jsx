import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b1zi16b4n {
  fill: var(--svg-color--fff, #fff);
  d: path("M3 3h18v3.214H6.214v1.929H21v3.214H3zm0 9.643h18v3.214H6.214v1.929H21V21H3z");
}
</style><path class="b1zi16b4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:euroe"} {...others} />);
}

export default Component;
