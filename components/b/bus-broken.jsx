import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/al3bd_bnm.css';
import '../../css/x/x4m6n8btz.css';
import '../../css/q/qy9-4uicp.css';
import '../../css/j/jl627cb0x.css';
import '../../css/b/b50vfuvvv.css';
import '../../css/p/pquf2ubks.css';
import '../../css/t/ttqc2kbgo.css';
import '../../css/h/hyu4seb-a.css';
import '../../css/o/on-qt-bcc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="al3bd_bnm"/><path class="x4m6n8btz"/><path class="qy9-4uicp"/><path class="jl627cb0x"/><path class="b50vfuvvv"/><path class="pquf2ubks"/><path class="ttqc2kbgo"/><path class="hyu4seb-a"/><path class="on-qt-bcc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bus-broken"} {...others} />);
}

export default Component;
