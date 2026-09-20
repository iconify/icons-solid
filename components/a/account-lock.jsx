import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fk5bzrb7k.css';
import '../../css/w/w5h2vxzei.css';
import '../../css/g/gx1t0kb3n.css';
import '../../css/o/oaodfzbce.css';
import '../../css/m/ml2te2bsu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fk5bzrb7k"/><path class="w5h2vxzei"/><path class="gx1t0kb3n"/><path class="oaodfzbce"/><path class="ml2te2bsu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:account-lock"} {...others} />);
}

export default Component;
