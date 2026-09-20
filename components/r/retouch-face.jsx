import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p-m04xbnt.css';
import '../../css/g/gy5096y6r.css';
import '../../css/y/ygcqhfl1n.css';
import '../../css/v/vnlif0xfm.css';
import '../../css/r/rrjuf1puz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p-m04xbnt"/><path class="gy5096y6r"/><path class="ygcqhfl1n"/><path class="vnlif0xfm"/><path class="rrjuf1puz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:retouch-face"} {...others} />);
}

export default Component;
