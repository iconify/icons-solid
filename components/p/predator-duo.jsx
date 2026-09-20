import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lavlmcboo.css';
import '../../css/m/mlpkwyupu.css';
import '../../css/p/pc786kb_q.css';
import '../../css/r/rvzs3aciw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="lavlmcboo"/><path class="mlpkwyupu"/><path class="pc786kb_q"/><path class="rvzs3aciw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:predator-duo"} {...others} />);
}

export default Component;
