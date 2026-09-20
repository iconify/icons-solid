import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i-8ankb1q.css';
import '../../css/v/v_juk5ico.css';
import '../../css/z/zx3h_acia.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="i-8ankb1q"/><path class="v_juk5ico"/><path class="zx3h_acia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:color-brush-1"} {...others} />);
}

export default Component;
