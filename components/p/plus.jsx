import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hbmx2r5ev.css';
import '../../css/n/n5dlzke5h.css';
import '../../css/k/kjrewcqhw.css';
import '../../css/f/f1w5t2aox.css';
import '../../css/r/r6tk1dt6g.css';
import '../../css/e/etoxy_exz.css';
import '../../css/e/eklqn-brb.css';
import '../../css/r/r02rrcb5j.css';
import '../../css/u/u0bj9cctp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hbmx2r5ev wm-shadow"/><path class="n5dlzke5h wm-shadow"/><path class="kjrewcqhw"/><path class="f1w5t2aox"/><path class="r6tk1dt6g"/><path class="etoxy_exz"/><path class="eklqn-brb wm-shine"/><path class="r02rrcb5j wm-shine"/><path class="u0bj9cctp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:plus"} {...others} />);
}

export default Component;
