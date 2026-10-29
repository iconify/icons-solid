import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i-h3j9bzx.css';
import '../../css/p/pqvsh4b8l.css';
import '../../css/e/etqnjha5v.css';
import '../../css/n/n8dsurkgv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="i-h3j9bzx wm-k"/><path class="pqvsh4b8l wm-shadow"/><path class="etqnjha5v wm-k"/><path class="n8dsurkgv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:brain-engrave"} {...others} />);
}

export default Component;
