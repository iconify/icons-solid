import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/oplmfrb1r.css';
import '../../css/a/a3ot30bnt.css';
import '../../css/f/fvm69zbgl.css';
import '../../css/a/as8gjpbuf.css';
import '../../css/d/dlzvcu34t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="oplmfrb1r wm-k"/><path class="a3ot30bnt wm-a"/><path class="fvm69zbgl wm-shadow"/><path class="as8gjpbuf wm-k"/><path class="dlzvcu34t wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chopsticks-engrave"} {...others} />);
}

export default Component;
