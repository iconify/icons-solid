import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e_7kbwyeh {
  fill: currentColor;
  d: path("M3 7V5h18v2zm0 12v-2h18v2zm0-6v-2h18v2z");
}
</style><path class="e_7kbwyeh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:dehaze"} {...others} />);
}

export default Component;
