import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u463rkbph.css';
import '../../css/x/xgy123d4l.css';
import '../../css/e/eluq70bbl.css';
import '../../css/m/mqiw-c5bt.css';
import '../../css/x/x4t2jlkmx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u463rkbph"/><path class="xgy123d4l"/><path class="eluq70bbl"/><path class="mqiw-c5bt"/><path class="x4t2jlkmx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:calendar-date"} {...others} />);
}

export default Component;
