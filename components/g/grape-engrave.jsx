import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lx8guvb-i.css';
import '../../css/w/wqvj56bhj.css';
import '../../css/e/eo_oo5b2r.css';
import '../../css/l/lhyb3bbbn.css';
import '../../css/x/x2f5ebbeb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="lx8guvb-i wm-k"/><path class="wm-a wqvj56bhj"/><path class="eo_oo5b2r wm-shadow"/><path class="lhyb3bbbn wm-k"/><path class="wm-a x2f5ebbeb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:grape-engrave"} {...others} />);
}

export default Component;
