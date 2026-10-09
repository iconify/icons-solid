import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fyl30e_uw.css';
import '../../css/v/vg4zk5bim.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fyl30e_uw"/><path class="vg4zk5bim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:share-48"} {...others} />);
}

export default Component;
