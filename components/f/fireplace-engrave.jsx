import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n3r3aob5w.css';
import '../../css/j/jg1pj_v2g.css';
import '../../css/p/pfodkzbrw.css';
import '../../css/d/dg5kmnbiz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="n3r3aob5w"/><path class="jg1pj_v2g wm-shadow"/><path class="pfodkzbrw"/><path class="dg5kmnbiz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:fireplace-engrave"} {...others} />);
}

export default Component;
