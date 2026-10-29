import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/asn38kb9q.css';
import '../../css/u/u4d-mh8hw.css';
import '../../css/g/gqr-fjz3v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="asn38kb9q"/><path class="u4d-mh8hw wm-shadow"/><path class="gqr-fjz3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:square-dashed-engrave"} {...others} />);
}

export default Component;
