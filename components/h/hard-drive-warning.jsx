import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/edgc67v_u.css';
import '../../css/x/xgbu7d8cp.css';
import '../../css/d/dkfwodbso.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="edgc67v_u"/><path class="xgbu7d8cp"/><path class="dkfwodbso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:hard-drive-warning"} {...others} />);
}

export default Component;
