import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vr4q576zk.css';
import '../../css/d/d5q-cib-y.css';
import '../../css/u/ughaqt5-i.css';
import '../../css/t/t7bxpzblz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="vr4q576zk wm-k"/><path class="d5q-cib-y wm-k"/><path class="ughaqt5-i wm-k"/><path class="t7bxpzblz wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-dino-sketch"} {...others} />);
}

export default Component;
