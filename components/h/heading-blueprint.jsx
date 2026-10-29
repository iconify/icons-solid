import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hhyr8iz-n.css';
import '../../css/c/ch-p73ibm.css';
import '../../css/k/kq0hvab1g.css';
import '../../css/v/vslz5yb3q.css';
import '../../css/i/i1iupn1bp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="hhyr8iz-n wm-deco"/><path class="ch-p73ibm wm-deco"/><path class="kq0hvab1g wm-k"/><path class="vslz5yb3q wm-a"/><path class="i1iupn1bp wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:heading-blueprint"} {...others} />);
}

export default Component;
