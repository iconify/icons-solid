import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/b7ss4s--r.css';
import '../../css/o/osmt2wiov.css';
import '../../css/c/ca9g4jbzr.css';
import '../../css/o/ofl-evjxh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="b7ss4s--r"/><path class="osmt2wiov wm-k"/><path class="ca9g4jbzr wm-k"/><path class="ofl-evjxh wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:washing-machine-sketch"} {...others} />);
}

export default Component;
