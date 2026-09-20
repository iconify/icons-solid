import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lnwykryte {
  fill: currentColor;
  d: path("M2 21v-2h2V3h16v16h2v2zm4-2h2V5H6zm4 0h4V5h-4zm6 0h2V5h-2zM6 19V5zm12 0V5z");
}
</style><path class="lnwykryte"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:vertical-shades-outline"} {...others} />);
}

export default Component;
