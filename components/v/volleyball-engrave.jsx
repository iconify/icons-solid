import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/ktuhxv9th.css';
import '../../css/l/l9bj8-b_u.css';
import '../../css/h/hm9dey-ai.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/n/nvd001kpk.css';
import '../../css/e/esx_dabgb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ktuhxv9th wm-k"/><path class="l9bj8-b_u wm-a"/><path class="hm9dey-ai wm-shadow"/><path class="wm-k yw4fz_b6b"/><path class="nvd001kpk wm-a"/><path class="esx_dabgb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:volleyball-engrave"} {...others} />);
}

export default Component;
