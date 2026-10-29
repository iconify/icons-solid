import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/we_b5psao.css';
import '../../css/s/ssp0-h_op.css';
import '../../css/c/c0cyspb-h.css';
import '../../css/s/sjr0g6bpm.css';
import '../../css/q/q7buc2b6x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="we_b5psao wm-k"/><path class="ssp0-h_op wm-k"/><path class="c0cyspb-h wm-k"/><path class="sjr0g6bpm wm-k"/><path class="q7buc2b6x wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-man-sketch"} {...others} />);
}

export default Component;
