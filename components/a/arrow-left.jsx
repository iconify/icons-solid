import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/w/wpnq97h_a.css';
import '../../css/c/cys3i128u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="wpnq97h_a"/><path class="cys3i128u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:arrow-left"} {...others} />);
}

export default Component;
