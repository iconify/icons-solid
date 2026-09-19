import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ekq8dhbvn {
  fill: currentColor;
  d: path("M13 7h-2v2h2zm0 4h-2v2h2zm4 0h-2v2h2zM3 3v18h18V3zm16 16H5V5h14zm-6-4h-2v2h2zm-4-4H7v2h2z");
}
</style><path class="ekq8dhbvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-border-outer"} {...others} />);
}

export default Component;
