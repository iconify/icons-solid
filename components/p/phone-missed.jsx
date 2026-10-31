import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hh_w5xbjn.css';
import '../../css/i/iax3wm1hh.css';
import '../../css/y/ymsnbooef.css';
import '../../css/m/mnc_-ccse.css';
import '../../css/o/oqrn10y8q.css';
import '../../css/s/spx9y234u.css';
import '../../css/n/nypsc2b_b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="hh_w5xbjn wm-shadow"/><path class="iax3wm1hh"/><path class="ymsnbooef"/><path class="mnc_-ccse"/><path class="oqrn10y8q"/><path class="spx9y234u"/><path class="nypsc2b_b wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:phone-missed"} {...others} />);
}

export default Component;
