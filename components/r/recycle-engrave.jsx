import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z3wh7mc-h.css';
import '../../css/h/hoffakb1f.css';
import '../../css/u/u3k3_4b5r.css';
import '../../css/u/u5mlj-ptc.css';
import '../../css/y/yt3clgbqu.css';
import '../../css/k/kba03cbif.css';
import '../../css/t/tmhadub0c.css';
import '../../css/c/c9y2s_rsd.css';
import '../../css/k/k_y5wliyr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k z3wh7mc-h"/><path class="hoffakb1f wm-a"/><path class="u3k3_4b5r wm-shadow"/><path class="u5mlj-ptc wm-k"/><path class="wm-a yt3clgbqu"/><path class="kba03cbif wm-k"/><path class="tmhadub0c wm-a"/><path class="c9y2s_rsd wm-k"/><path class="k_y5wliyr wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:recycle-engrave"} {...others} />);
}

export default Component;
