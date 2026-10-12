import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c1o5_sb_v.css';
import '../../css/l/lijcvobnr.css';
import '../../css/d/d6mp999lz.css';
import '../../css/o/ollo1vbxs.css';
import '../../css/d/d006ogo3r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c1o5_sb_v"/><rect class="lijcvobnr"/><rect class="d6mp999lz"/><circle class="ollo1vbxs"/><path class="d006ogo3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:timer-pause"} {...others} />);
}

export default Component;
