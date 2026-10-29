import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j28mambxy.css';
import '../../css/f/fd5etqajb.css';
import '../../css/l/lg-8n1num.css';
import '../../css/i/itg9jgtim.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="j28mambxy"/><path class="fd5etqajb wm-shadow"/><path class="lg-8n1num"/><path class="itg9jgtim wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:kanban-engrave"} {...others} />);
}

export default Component;
