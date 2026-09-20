import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l1umcibyc.css';
import '../../css/y/yo5bjdbbd.css';
import '../../css/k/k72n2br1v.css';
import '../../css/v/v0u_jlb-x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l1umcibyc"/><path class="yo5bjdbbd"/><path class="k72n2br1v"/><path class="v0u_jlb-x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:vide-document-mov-1"} {...others} />);
}

export default Component;
