import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/w/wnxlphb_i.css';
import '../../css/w/we1o4actj.css';
import '../../css/l/lg-8n1num.css';
import '../../css/m/mylmw0bop.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="wnxlphb_i"/><path class="we1o4actj wm-shine"/><path class="lg-8n1num wm-k"/><path class="mylmw0bop wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:square-plus"} {...others} />);
}

export default Component;
