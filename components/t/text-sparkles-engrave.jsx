import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i_gbtq9gj.css';
import '../../css/h/h4wzpe_dp.css';
import '../../css/s/se-gosbnd.css';
import '../../css/g/gz4rmvf3e.css';
import '../../css/c/ciui2qe_b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="i_gbtq9gj wm-k"/><path class="h4wzpe_dp wm-s"/><path class="se-gosbnd wm-shadow"/><path class="gz4rmvf3e wm-k"/><path class="ciui2qe_b wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:text-sparkles-engrave"} {...others} />);
}

export default Component;
