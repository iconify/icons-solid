import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/un_01ximz.css';
import '../../css/m/m4rbgbbhm.css';
import '../../css/q/qzowdsb6o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="un_01ximz"/><path class="m4rbgbbhm"/><path class="qzowdsb6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:phone-outgoing-48"} {...others} />);
}

export default Component;
