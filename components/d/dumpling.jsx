import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jbuo745ut.css';
import '../../css/j/jibkylakw.css';
import '../../css/u/uhzthdcln.css';
import '../../css/c/c_hggkbji.css';
import '../../css/f/ffwt03rkd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jbuo745ut wm-k"/><path class="jibkylakw wm-k"/><path class="uhzthdcln wm-k"/><path class="c_hggkbji wm-shine"/><path class="ffwt03rkd wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:dumpling"} {...others} />);
}

export default Component;
