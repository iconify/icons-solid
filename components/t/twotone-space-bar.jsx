import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mb_bxsbbi {
  fill: currentColor;
  d: path("M18 13H6V9H4v6h16V9h-2z");
}
</style><path class="mb_bxsbbi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-space-bar"} {...others} />);
}

export default Component;
