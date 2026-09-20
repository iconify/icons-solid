import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i_ui746ts.css';
import '../../css/k/k-uvc6oku.css';
import '../../css/g/gofdj2b-o.css';
import '../../css/n/n5bq1obns.css';
import '../../css/x/xvt0cvbdn.css';
import '../../css/t/t5u6a2lvs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i_ui746ts"/><path class="k-uvc6oku"/><path class="gofdj2b-o"/><path class="n5bq1obns"/><path class="xvt0cvbdn"/><path class="t5u6a2lvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:business-target"} {...others} />);
}

export default Component;
