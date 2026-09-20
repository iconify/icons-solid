import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/trbccptdc.css';
import '../../css/y/ym_lztb4y.css';
import '../../css/e/ee10sccwz.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="trbccptdc"/><path class="ym_lztb4y"/><path class="ee10sccwz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:ai-chip-robot-flat"} {...others} />);
}

export default Component;
