import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/f/fznb90gae.css';
import '../../css/e/e51_i-bxj.css';
import '../../css/s/slj-q6j2r.css';
import '../../css/x/xpzch8yxc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="fznb90gae"/><path class="e51_i-bxj"/><path class="slj-q6j2r"/><path class="xpzch8yxc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:refresh-2-light"} {...others} />);
}

export default Component;
