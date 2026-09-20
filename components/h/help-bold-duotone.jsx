import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gxhd4u6wf.css';
import '../../css/s/s09r3n6gp.css';
import '../../css/i/ip6p_nbsf.css';
import '../../css/g/gwb_7vbte.css';
import '../../css/e/e-kae66_r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gxhd4u6wf"/><path class="s09r3n6gp"/><path class="ip6p_nbsf"/><path class="gwb_7vbte"/><path class="e-kae66_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:help-bold-duotone"} {...others} />);
}

export default Component;
