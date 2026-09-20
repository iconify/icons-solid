import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rfoucwe1v.css';
import '../../css/c/cr_qpyb7b.css';
import '../../css/c/cddclgyug.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rfoucwe1v"/><path class="cr_qpyb7b"/><path class="cddclgyug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:programming-code-idea"} {...others} />);
}

export default Component;
