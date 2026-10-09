import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkkf-abgy.css';
import '../../css/e/e73jcmbxs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gkkf-abgy"/><path class="e73jcmbxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gas-flare-48"} {...others} />);
}

export default Component;
