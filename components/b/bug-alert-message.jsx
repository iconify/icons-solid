import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lvfosvd_y.css';
import '../../css/l/li_jm9p_m.css';
import '../../css/j/jqh2ptbup.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lvfosvd_y"/><path class="li_jm9p_m"/><path class="jqh2ptbup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:bug-alert-message"} {...others} />);
}

export default Component;
