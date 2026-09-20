import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mv7zve2go.css';
import '../../css/w/wobq_bpfs.css';
import '../../css/z/zfr3rtvfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mv7zve2go"/><path class="wobq_bpfs"/><path class="zfr3rtvfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:task-list-pen"} {...others} />);
}

export default Component;
