import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u_jv868wi.css';
import '../../css/s/sw1e5_zio.css';
import '../../css/o/oags8zbjj.css';
import '../../css/l/lhr7mp78x.css';
import '../../css/a/al_hgmb2q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="u_jv868wi wm-k"/><path class="sw1e5_zio wm-a"/><path class="oags8zbjj wm-shadow"/><path class="lhr7mp78x wm-k"/><path class="al_hgmb2q wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-fog-engrave"} {...others} />);
}

export default Component;
