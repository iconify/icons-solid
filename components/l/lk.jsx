import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gghxkwb3e.css';
import '../../css/v/v6gspv2tb.css';
import '../../css/x/xnx_zun1j.css';
import '../../css/d/d7xwd9byr.css';
import '../../css/j/jzzoxactr.css';
import '../../css/m/m4ay3wsta.css';
import '../../css/r/rspd50dse.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="gghxkwb3e"/><path class="v6gspv2tb"/><path class="xnx_zun1j"/><path class="d7xwd9byr"/><path class="jzzoxactr"/><path class="m4ay3wsta"/><path class="rspd50dse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:lk"} {...others} />);
}

export default Component;
