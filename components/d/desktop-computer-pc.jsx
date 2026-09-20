import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/ninwsxb1h.css';
import '../../css/k/kgw252bip.css';
import '../../css/m/mfuvyvbxo.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ninwsxb1h"/><path class="kgw252bip"/><path class="mfuvyvbxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:desktop-computer-pc"} {...others} />);
}

export default Component;
