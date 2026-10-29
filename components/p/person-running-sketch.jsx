import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/aj7nb3b0g.css';
import '../../css/r/rqpznn91v.css';
import '../../css/d/dyo5hzbdy.css';
import '../../css/g/g7td--57i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="aj7nb3b0g wm-k"/><path class="rqpznn91v wm-a"/><path class="dyo5hzbdy wm-k"/><path class="g7td--57i wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:person-running-sketch"} {...others} />);
}

export default Component;
