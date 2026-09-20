import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xqe516b6x.css';
import '../../css/q/q1oze7b7n.css';
import '../../css/g/gd_kfccpd.css';
import '../../css/o/o3akt-byi.css';
import '../../css/c/cz7-vfb_n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="xqe516b6x"/><path class="q1oze7b7n"/><path class="gd_kfccpd"/><path class="o3akt-byi"/><path class="cz7-vfb_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:beach-2-duo"} {...others} />);
}

export default Component;
