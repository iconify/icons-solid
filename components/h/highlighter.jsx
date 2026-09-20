import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cw83-jgec.css';
import '../../css/o/ov0x3gbwq.css';
import '../../css/r/rlz1a_fkg.css';
import '../../css/p/pfgweebog.css';
import '../../css/m/maytnug3s.css';
import '../../css/h/hyop11bzf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cw83-jgec"/><path class="ov0x3gbwq"/><path class="rlz1a_fkg"/><path class="pfgweebog"/><path class="maytnug3s"/><path class="hyop11bzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:highlighter"} {...others} />);
}

export default Component;
