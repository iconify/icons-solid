import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l036ii7qq.css';
import '../../css/r/ronv3mqpy.css';
import '../../css/u/uwcpg_b_h.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/x/x_k9ocb8k.css';
import '../../css/v/vuh-3acvu.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="l036ii7qq"/><path class="ronv3mqpy"/><path class="uwcpg_b_h"/><g class="ij2x_72vy"><path class="x_k9ocb8k"/><path class="vuh-3acvu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:snow-capped-mountain"} {...others} />);
}

export default Component;
