import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/iuumq_xza.css';
import '../../css/v/vbjcoebvr.css';
import '../../css/q/q3q5_acsu.css';
import '../../css/q/q00c_qbka.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="iuumq_xza"/><path class="vbjcoebvr"/><path class="q3q5_acsu"/><path class="q00c_qbka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:wealth-pearl-ring"} {...others} />);
}

export default Component;
