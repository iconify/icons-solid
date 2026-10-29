import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l67s7zbss.css';
import '../../css/o/opvnhmoea.css';
import '../../css/n/n2kxb8blp.css';
import '../../css/i/ip9ou-86q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="l67s7zbss"/><path class="opvnhmoea wm-a"/><path class="n2kxb8blp"/><path class="ip9ou-86q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:history-duo"} {...others} />);
}

export default Component;
