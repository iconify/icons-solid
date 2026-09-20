import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dplukrb9s.css';
import '../../css/z/ziof41bfa.css';
import '../../css/h/hffm7qbmz.css';
import '../../css/e/e1e1scbtq.css';
import '../../css/f/fp83bcb9p.css';
import '../../css/t/tgzo5bbej.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dplukrb9s"/><path class="ziof41bfa"/><path class="hffm7qbmz"/><path class="e1e1scbtq"/><path class="fp83bcb9p"/><path class="tgzo5bbej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:programming-touchscreen"} {...others} />);
}

export default Component;
