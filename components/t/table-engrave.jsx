import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uf2l6lbxy.css';
import '../../css/e/e_gp3jbds.css';
import '../../css/p/pp76qbckp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="uf2l6lbxy"/><path class="e_gp3jbds wm-shadow"/><path class="pp76qbckp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:table-engrave"} {...others} />);
}

export default Component;
