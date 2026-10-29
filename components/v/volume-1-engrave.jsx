import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f6jp3jbsz.css';
import '../../css/i/ia41obz6w.css';
import '../../css/c/ctl-cmswa.css';
import '../../css/s/st-oxhb_e.css';
import '../../css/t/tisd5ib6g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="f6jp3jbsz wm-k"/><path class="ia41obz6w wm-a"/><path class="ctl-cmswa wm-shadow"/><path class="st-oxhb_e wm-k"/><path class="tisd5ib6g wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:volume-1-engrave"} {...others} />);
}

export default Component;
