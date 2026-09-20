import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x59723bpz {
  fill: currentColor;
  d: path("M2 21v-2h2V3h16v16h2v2zm4-2h3V5H6zm5 0h2V5h-2zm4 0h3V5h-3zm-9 0V5zm12 0V5z");
}
</style><path class="x59723bpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:curtains-closed-outline-sharp"} {...others} />);
}

export default Component;
