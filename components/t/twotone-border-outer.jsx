import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k5-8cdcye {
  fill: currentColor;
  d: path("M11 11h2v2h-2zm0-4h2v2h-2zm10-4H3v18h18zm-2 16H5V5h14zm-4-8h2v2h-2zm-8 0h2v2H7zm4 4h2v2h-2z");
}
</style><path class="k5-8cdcye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-border-outer"} {...others} />);
}

export default Component;
