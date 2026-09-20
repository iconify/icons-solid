import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d65oxlv4h {
  fill: currentColor;
  d: path("M7.45 19h9.1l3.075-9.225L12 4.45L4.375 9.775zM6 21L2 9l10-7l10 7l-4 12zm6-9.275");
}
</style><path class="d65oxlv4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:pentagon-outline"} {...others} />);
}

export default Component;
