import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g2fqzc34l.css';
import '../../css/x/x6wurfbzt.css';
import '../../css/i/iwe_rn_rm.css';
import '../../css/r/ra358_b3i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="g2fqzc34l"/><path class="wm-a x6wurfbzt"/><path class="iwe_rn_rm wm-k"/><path class="ra358_b3i wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:volume-1-sketch"} {...others} />);
}

export default Component;
