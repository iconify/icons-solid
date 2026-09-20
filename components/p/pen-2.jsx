import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hipxa09dn.css';
import '../../css/l/lw65k_b5b.css';
import '../../css/p/pwfhs4brh.css';
import '../../css/d/dxt32-bgs.css';
import '../../css/z/zhd-fkuve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hipxa09dn"/><path class="lw65k_b5b"/><path class="pwfhs4brh"/><path class="dxt32-bgs"/><path class="zhd-fkuve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:pen-2"} {...others} />);
}

export default Component;
