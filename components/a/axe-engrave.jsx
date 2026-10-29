import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/koiop_bgs.css';
import '../../css/t/t3pn7oyuv.css';
import '../../css/x/x7_2omoef.css';
import '../../css/m/mjecvc15l.css';
import '../../css/g/gfqmenbgk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="koiop_bgs wm-k"/><path class="t3pn7oyuv wm-a"/><path class="wm-shadow x7_2omoef"/><path class="mjecvc15l wm-k"/><path class="gfqmenbgk wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:axe-engrave"} {...others} />);
}

export default Component;
