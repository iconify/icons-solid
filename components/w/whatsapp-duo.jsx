import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bg6mp7bmo.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/p2yv41ddi.css';
import '../../css/s/stmbfjbtn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bg6mp7bmo secondary"/><g class="dt0cm9dhy primary"><path class="p2yv41ddi"/><path class="stmbfjbtn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:whatsapp-duo"} {...others} />);
}

export default Component;
