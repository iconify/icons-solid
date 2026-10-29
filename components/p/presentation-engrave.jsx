import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/b1sbf1r7d.css';
import '../../css/i/iwt4btmpj.css';
import '../../css/j/jqk00rbpu.css';
import '../../css/c/camcnmb1b.css';
import '../../css/d/dljqukb2t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="b1sbf1r7d wm-k"/><path class="iwt4btmpj wm-a"/><path class="jqk00rbpu wm-shadow"/><path class="camcnmb1b wm-k"/><path class="dljqukb2t wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:presentation-engrave"} {...others} />);
}

export default Component;
