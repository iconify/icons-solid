import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vx259dcfs.css';
import '../../css/v/vyud_uuqs.css';
import '../../css/n/nrze7ue5l.css';
import '../../css/h/hh5iymbpq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vx259dcfs"/><path class="vyud_uuqs"/><path class="nrze7ue5l"/><path class="hh5iymbpq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:server"} {...others} />);
}

export default Component;
