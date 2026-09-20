import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mbk1rbcqn.css';
import '../../css/f/fv4tjzrua.css';
import '../../css/i/ii4kaebow.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mbk1rbcqn"/><path class="fv4tjzrua"/><path class="ii4kaebow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:task-list-clipboard-share"} {...others} />);
}

export default Component;
