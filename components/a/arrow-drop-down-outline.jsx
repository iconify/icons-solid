import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gkpvchb-b {
  fill: currentColor;
  d: path("m12 15l-5-5h10z");
}
</style><path class="gkpvchb-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:arrow-drop-down-outline"} {...others} />);
}

export default Component;
