import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zn_5r5bci.css';
import '../../css/v/v1zar_b1m.css';
import '../../css/v/vz-zyzafm.css';
import '../../css/h/h23htobjy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zn_5r5bci"/><path class="v1zar_b1m"/><path class="vz-zyzafm"/><path class="h23htobjy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:basketball"} {...others} />);
}

export default Component;
