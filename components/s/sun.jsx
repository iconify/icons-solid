import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5eak3k2p.css';
import '../../css/p/p13kdnbfo.css';
import '../../css/h/he36m_v7b.css';
import '../../css/x/x9xm9qexj.css';
import '../../css/e/egyveqizw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l5eak3k2p"><circle class="p13kdnbfo wm-shadow"/><circle class="he36m_v7b"/><path class="wm-a x9xm9qexj"/><path class="egyveqizw wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:sun"} {...others} />);
}

export default Component;
