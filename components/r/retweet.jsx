import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/h/hvb_mgbxp.css';
import '../../css/o/owdwaw4ke.css';
import '../../css/f/f_qg2bg2p.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="hvb_mgbxp"/><path class="owdwaw4ke"/><path class="f_qg2bg2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:retweet"} {...others} />);
}

export default Component;
