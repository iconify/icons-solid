import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j_twqcb8v.css';
import '../../css/o/o682i_8-s.css';
import '../../css/o/ol--9d_nl.css';
import '../../css/l/lctwt5bza.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j_twqcb8v"/><path class="o682i_8-s"/><path class="ol--9d_nl"/><path class="lctwt5bza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:magnifying-glass-circle"} {...others} />);
}

export default Component;
