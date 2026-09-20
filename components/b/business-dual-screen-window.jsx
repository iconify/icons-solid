import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i97lt2_3g.css';
import '../../css/g/gc94qmbef.css';
import '../../css/d/dsfmdzhhv.css';
import '../../css/h/hamahs9xf.css';
import '../../css/e/e_xk2-l8a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i97lt2_3g"/><path class="gc94qmbef"/><path class="dsfmdzhhv"/><path class="hamahs9xf"/><path class="e_xk2-l8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:business-dual-screen-window"} {...others} />);
}

export default Component;
