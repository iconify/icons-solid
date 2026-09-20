import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ifuwiobgx.css';
import '../../css/t/tpyna9b4s.css';
import '../../css/d/drh67tb_e.css';
import '../../css/o/oll56ab6n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ifuwiobgx"/><path class="tpyna9b4s"/><path class="drh67tb_e"/><path class="oll56ab6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:programming-css3"} {...others} />);
}

export default Component;
