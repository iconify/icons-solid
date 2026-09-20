import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/idaqdi6bn.css';
import '../../css/g/gfpr6fa5n.css';
import '../../css/f/f1_3wz6jz.css';
import '../../css/r/rms5nyhzb.css';
import '../../css/l/lufvyp4hq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="idaqdi6bn"/><path class="gfpr6fa5n"/><path class="f1_3wz6jz"/><path class="rms5nyhzb"/><path class="lufvyp4hq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:microphone-1"} {...others} />);
}

export default Component;
