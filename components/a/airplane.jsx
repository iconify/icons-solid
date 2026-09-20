import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hbdcg4bcq.css';
import '../../css/b/bktiry0ue.css';
import '../../css/t/tccyt80jp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hbdcg4bcq"/><path class="bktiry0ue"/><path class="tccyt80jp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:airplane"} {...others} />);
}

export default Component;
