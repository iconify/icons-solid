import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qrrp2vb9e.css';
import '../../css/i/iaidsl54n.css';
import '../../css/g/gvfs-1b3m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qrrp2vb9e"/><path class="iaidsl54n"/><path class="gvfs-1b3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hospital-20-bold"} {...others} />);
}

export default Component;
