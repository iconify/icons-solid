import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b53r-kbxl.css';
import '../../css/x/x_6_7pssw.css';
import '../../css/w/w-zh29bfx.css';
import '../../css/t/ttah5ul5h.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="b53r-kbxl"/><path class="x_6_7pssw"/><path class="w-zh29bfx"/><path class="ttah5ul5h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:design-process-drawing-board-education"} {...others} />);
}

export default Component;
