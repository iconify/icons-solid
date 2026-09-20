import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nigx2wbdb.css';
import '../../css/h/htjepabmz.css';
import '../../css/q/qtkdtxbkm.css';
import '../../css/d/dy1y8yfii.css';
import '../../css/w/wf2inib9f.css';
import '../../css/w/w__zrd_ab.css';
import '../../css/k/kf2xfzb-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="nigx2wbdb"/><path class="htjepabmz"/><path class="qtkdtxbkm"/><rect class="dy1y8yfii"/><rect class="wf2inib9f"/><rect class="w__zrd_ab"/><rect class="kf2xfzb-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:date-range-light"} {...others} />);
}

export default Component;
