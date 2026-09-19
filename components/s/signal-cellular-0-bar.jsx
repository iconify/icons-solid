import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g-nf5tb5r {
  fill: currentColor;
  d: path("M20 6.83V20H6.83zM22 2L2 22h20z");
}
</style><path class="g-nf5tb5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:signal-cellular-0-bar"} {...others} />);
}

export default Component;
