import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xzi62pqbj.css';
import '../../css/h/hmocrmbht.css';
import '../../css/a/am_q_ho_c.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="xzi62pqbj"/><path class="hmocrmbht"/><path class="am_q_ho_c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:money-coin-stack"} {...others} />);
}

export default Component;
