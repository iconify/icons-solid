import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejvdg2q1j.css';
import '../../css/p/p2_kkklpr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ejvdg2q1j"/><path class="p2_kkklpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:webhook-48"} {...others} />);
}

export default Component;
