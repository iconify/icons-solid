import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gw_mod-bn {
  fill: currentColor;
  d: path("M21 11.01L3 11v2h18zM3 16h12v2H3zM21 6H3v2.01L21 8z");
}
</style><path class="gw_mod-bn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-notes"} {...others} />);
}

export default Component;
