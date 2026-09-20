import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qlodfi8rw.css';
import '../../css/x/x35k9g5le.css';
import '../../css/t/t044i1_sg.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="qlodfi8rw"/><path class="x35k9g5le"/><path class="t044i1_sg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:rotate-lock-smartphone"} {...others} />);
}

export default Component;
