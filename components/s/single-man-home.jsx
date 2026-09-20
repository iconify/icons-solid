import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nnkv2pb2i.css';
import '../../css/t/t0akf332f.css';
import '../../css/h/huszxeb5v.css';
import '../../css/x/xehg5qpgo.css';
import '../../css/a/aszrs7c0e.css';
import '../../css/e/ec543rbjt.css';
import '../../css/h/h59dvw4qp.css';
import '../../css/p/ppa73hbzp.css';
import '../../css/s/sm1ckzbjd.css';
import '../../css/f/f-i72075l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nnkv2pb2i"/><path class="t0akf332f"/><path class="huszxeb5v"/><path class="xehg5qpgo"/><path class="aszrs7c0e"/><path class="ec543rbjt"/><path class="h59dvw4qp"/><path class="ppa73hbzp"/><path class="sm1ckzbjd"/><path class="f-i72075l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:single-man-home"} {...others} />);
}

export default Component;
