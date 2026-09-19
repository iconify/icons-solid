import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s4wbcpb6b {
  fill: currentColor;
  d: path("M22 4H2v16h20zm-2 14H4v-6h16zm0-10H4V6h16z");
}
</style><path class="s4wbcpb6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-payment"} {...others} />);
}

export default Component;
