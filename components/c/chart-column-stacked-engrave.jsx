import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g1l9j8-ir.css';
import '../../css/m/m2s_ux-ta.css';
import '../../css/l/lw_p7hcmh.css';
import '../../css/s/sukohubkj.css';
import '../../css/c/c012e5boc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="g1l9j8-ir wm-k"/><path class="m2s_ux-ta wm-a"/><path class="lw_p7hcmh wm-shadow"/><path class="sukohubkj wm-a"/><path class="c012e5boc wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-column-stacked-engrave"} {...others} />);
}

export default Component;
