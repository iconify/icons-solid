import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t4hfc5sbl.css';
import '../../css/x/xwyp-bb1d.css';
import '../../css/m/me_j4dbud.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="t4hfc5sbl"/><path class="xwyp-bb1d"/><path class="me_j4dbud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pills-3-outline"} {...others} />);
}

export default Component;
