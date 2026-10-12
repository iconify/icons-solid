import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fsu7h-b-q.css';
import '../../css/s/sn3j5vz1q.css';
import '../../css/c/c4_zttl1w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fsu7h-b-q"/><path class="sn3j5vz1q"/><path class="c4_zttl1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:blood-drop-48"} {...others} />);
}

export default Component;
