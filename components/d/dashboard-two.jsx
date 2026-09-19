import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/sk-4frw1p.css';
import '../../css/y/yngjwbcke.css';
import '../../css/s/s95ywrb-q.css';
import '../../css/d/dylqz1b1y.css';
import '../../css/v/vydv_p53t.css';
import '../../css/u/ukcv0rbnq.css';
import '../../css/z/zzkdk1b0z.css';
import '../../css/a/abr207hdm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="sk-4frw1p"/><path class="yngjwbcke"/><path class="s95ywrb-q"/><path class="dylqz1b1y"/><path class="vydv_p53t"/><path class="ukcv0rbnq"/><path class="zzkdk1b0z"/><path class="abr207hdm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:dashboard-two"} {...others} />);
}

export default Component;
