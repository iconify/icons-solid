import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fu0zqnbaj.css';
import '../../css/n/nk5nmmbrn.css';
import '../../css/q/qm9ru_b3u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fu0zqnbaj"/><path class="nk5nmmbrn"/><path class="qm9ru_b3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charger-fault-20"} {...others} />);
}

export default Component;
