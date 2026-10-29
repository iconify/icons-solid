import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/oi98yqb2d.css';
import '../../css/e/em9082e6z.css';
import '../../css/o/ozp63ob-s.css';
import '../../css/y/y3j3vjb4e.css';
import '../../css/h/hayg57blh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="oi98yqb2d wm-k"/><path class="em9082e6z wm-a"/><path class="ozp63ob-s wm-shadow"/><path class="wm-k y3j3vjb4e"/><path class="hayg57blh wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:briefcase-medical-engrave"} {...others} />);
}

export default Component;
