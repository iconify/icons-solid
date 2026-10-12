import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j-az_vbuz.css';
import '../../css/z/ze92cpb2t.css';
import '../../css/s/syzq55b5o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j-az_vbuz"/><circle transform="rotate(90 12 12)" class="ze92cpb2t"/><path class="syzq55b5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:heart-circle"} {...others} />);
}

export default Component;
