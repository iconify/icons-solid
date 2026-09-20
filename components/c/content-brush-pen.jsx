import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fro3_tw4w.css';
import '../../css/l/lfzgj2bpk.css';
import '../../css/f/fnorhmrao.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="fro3_tw4w"/><path class="lfzgj2bpk"/><path class="fnorhmrao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:content-brush-pen"} {...others} />);
}

export default Component;
