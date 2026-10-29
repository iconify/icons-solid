import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dp4mbpsfd.css';
import '../../css/h/h6594cbpd.css';
import '../../css/d/dts17x5we.css';
import '../../css/u/ux6wsp7dg.css';
import '../../css/h/ha533jbga.css';
import '../../css/u/uplgk-bvb.css';
import '../../css/q/qsp2_ukwn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dp4mbpsfd wm-shadow"/><path class="h6594cbpd wm-k"/><path class="dts17x5we wm-k"/><path class="ux6wsp7dg wm-k"/><path class="ha533jbga wm-k"/><path class="uplgk-bvb wm-k"/><path class="qsp2_ukwn wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:undo"} {...others} />);
}

export default Component;
