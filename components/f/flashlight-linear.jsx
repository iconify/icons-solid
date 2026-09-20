import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k1hg_q6gd.css';
import '../../css/m/mwgy38bvr.css';
import '../../css/v/vma4mubrc.css';
import '../../css/m/m4eix-b4z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="k1hg_q6gd"/><path class="mwgy38bvr"/><path class="vma4mubrc"/><path class="m4eix-b4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flashlight-linear"} {...others} />);
}

export default Component;
