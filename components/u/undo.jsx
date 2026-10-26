import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/q/q7ao4eg-v.css';
import '../../css/o/o67oqhbks.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="q7ao4eg-v"/><path class="o67oqhbks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:undo"} {...others} />);
}

export default Component;
