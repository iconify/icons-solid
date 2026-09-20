import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vw_gxpbld.css';
import '../../css/t/t0ujf-b5o.css';
import '../../css/u/u_ntt4bqx.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="vw_gxpbld"/><path class="t0ujf-b5o"/><path class="u_ntt4bqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:website-development-browser-com-web"} {...others} />);
}

export default Component;
