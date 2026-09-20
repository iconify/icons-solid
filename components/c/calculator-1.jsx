import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d7cqly6iy.css';
import '../../css/r/rvofrtbyf.css';
import '../../css/h/hf94hdb3x.css';
import '../../css/o/ooxq6ibqr.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="d7cqly6iy"/><path clip-rule="evenodd" class="rvofrtbyf"/><path class="hf94hdb3x"/><path class="ooxq6ibqr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:calculator-1"} {...others} />);
}

export default Component;
