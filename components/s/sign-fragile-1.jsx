import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xsazsgp2q.css';
import '../../css/d/dkcwanadw.css';
import '../../css/m/mu0hyacnm.css';
import '../../css/p/pld31xy2s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xsazsgp2q"/><path class="dkcwanadw"/><path class="mu0hyacnm"/><path class="pld31xy2s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:sign-fragile-1"} {...others} />);
}

export default Component;
