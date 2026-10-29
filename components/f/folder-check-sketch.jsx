import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v65z5be8c.css';
import '../../css/o/o19bcrb8v.css';
import '../../css/d/d87ng64hw.css';
import '../../css/e/exthxrocb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="v65z5be8c"/><path class="o19bcrb8v wm-a"/><path class="d87ng64hw wm-k"/><path class="exthxrocb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:folder-check-sketch"} {...others} />);
}

export default Component;
