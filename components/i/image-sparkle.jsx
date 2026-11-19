import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ietv5vbyw.css';
import '../../css/e/ev-hx2bkf.css';
import '../../css/e/e4buufbsz.css';
import '../../css/s/s7ydxeb6q.css';
import '../../css/z/zapwtgb_o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ietv5vbyw"/><path class="ev-hx2bkf"/><path class="e4buufbsz"/><path class="s7ydxeb6q"/><path class="zapwtgb_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:image-sparkle"} {...others} />);
}

export default Component;
