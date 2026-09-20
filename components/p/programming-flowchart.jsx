import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/og3z7xb8z.css';
import '../../css/c/cklkn_buw.css';
import '../../css/h/hgrhhsb1a.css';
import '../../css/j/j_oh_7b3q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="og3z7xb8z"/><path clip-rule="evenodd" class="cklkn_buw"/><path class="hgrhhsb1a"/><path class="j_oh_7b3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:programming-flowchart"} {...others} />);
}

export default Component;
