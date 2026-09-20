import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n0i-vgb_k.css';
import '../../css/f/fjho7nbhe.css';
import '../../css/p/pdujj3blx.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="n0i-vgb_k"/><path class="fjho7nbhe"/><path class="pdujj3blx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:cleaning-sign"} {...others} />);
}

export default Component;
