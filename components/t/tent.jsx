import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/u/uld4dgb9e.css';
import '../../css/x/xhta_8bqb.css';
import '../../css/r/rcr1rebbd.css';
import '../../css/x/xlau4cdnj.css';
import '../../css/a/anjhkob_h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="uld4dgb9e"/><path class="xhta_8bqb"/><path class="rcr1rebbd wm-shine"/><path class="wm-k xlau4cdnj"/><path class="anjhkob_h wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:tent"} {...others} />);
}

export default Component;
