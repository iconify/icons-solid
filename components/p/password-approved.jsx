import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v_91i9b8y.css';
import '../../css/h/h2ye-xbav.css';
import '../../css/t/t24s_tb_v.css';
import '../../css/y/ytvj_nbgt.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="v_91i9b8y"/><path class="h2ye-xbav"/><path class="t24s_tb_v"/><path class="ytvj_nbgt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:password-approved"} {...others} />);
}

export default Component;
