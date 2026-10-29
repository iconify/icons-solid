import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/b-jcbhbow.css';
import '../../css/o/oi09glzat.css';
import '../../css/s/saw55rb-m.css';
import '../../css/g/gfb62bt5g.css';
import '../../css/c/ck_6qidwg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="b-jcbhbow wm-k"/><path class="oi09glzat wm-a"/><path class="saw55rb-m wm-shadow"/><path class="gfb62bt5g wm-k"/><path class="ck_6qidwg wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:contact-engrave"} {...others} />);
}

export default Component;
