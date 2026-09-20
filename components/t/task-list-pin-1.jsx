import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t-wkp8hgq.css';
import '../../css/g/grfl72bbk.css';
import '../../css/r/rj-6c4bkg.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="t-wkp8hgq"/><path class="grfl72bbk"/><path class="rj-6c4bkg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:task-list-pin-1"} {...others} />);
}

export default Component;
