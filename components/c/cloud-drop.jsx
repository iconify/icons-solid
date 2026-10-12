import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zv_gds3rt.css';
import '../../css/r/rs0wrok6f.css';
import '../../css/o/odybpvbhl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zv_gds3rt"/><path class="rs0wrok6f"/><path class="odybpvbhl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cloud-drop"} {...others} />);
}

export default Component;
