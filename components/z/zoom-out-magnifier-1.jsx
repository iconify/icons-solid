import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/je_vu3sjf.css';
import '../../css/u/u80o8dbkj.css';
import '../../css/v/vak15ibjv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="je_vu3sjf"/><path class="u80o8dbkj"/><path class="vak15ibjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:zoom-out-magnifier-1"} {...others} />);
}

export default Component;
