import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f5vuxn4jy.css';
import '../../css/c/cuef2hbsq.css';
import '../../css/n/n9x5mw-bl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f5vuxn4jy"/><path class="cuef2hbsq"/><path class="n9x5mw-bl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:time-clock-circle"} {...others} />);
}

export default Component;
