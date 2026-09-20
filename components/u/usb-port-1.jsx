import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/di4___b_m.css';
import '../../css/m/msrbc2b2g.css';
import '../../css/s/s819s4b2p.css';
import '../../css/n/nxb2auxle.css';
import '../../css/d/di-1wbckg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="di4___b_m"/><path class="msrbc2b2g"/><path class="s819s4b2p"/><path class="nxb2auxle"/><path class="di-1wbckg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:usb-port-1"} {...others} />);
}

export default Component;
