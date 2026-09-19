import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p2zcctxap {
  fill: currentColor;
  d: path("M22 4H2v16h20zm-6.25 10.09L4 11.22V10h16v.53zM4 6h16v2H4z");
}
</style><path class="p2zcctxap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-wallet"} {...others} />);
}

export default Component;
