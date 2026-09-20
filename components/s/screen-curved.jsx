import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/co-m62bop.css';
import '../../css/q/qmml9bcel.css';
import '../../css/l/le1tw3baq.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="co-m62bop"/><path class="qmml9bcel"/><path class="le1tw3baq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:screen-curved"} {...others} />);
}

export default Component;
