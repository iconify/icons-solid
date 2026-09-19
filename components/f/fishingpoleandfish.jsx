import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hq52xnb2y.css';
import '../../css/a/a59chpboo.css';
import '../../css/o/ockegub-m.css';
import '../../css/p/pz2qwu1dd.css';
import '../../css/b/bf4y7zbwz.css';
import '../../css/b/bwv8-u47i.css';
import '../../css/w/wo00iibxu.css';
import '../../css/c/cbueje50s.css';
import '../../css/g/gdg7tcc-f.css';
import '../../css/x/x5xn_jb-i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hq52xnb2y"/><path class="a59chpboo"/><path class="ockegub-m"/><path class="pz2qwu1dd"/><path class="bf4y7zbwz"/><path class="bwv8-u47i"/><path class="wo00iibxu"/><path class="cbueje50s"/><path class="gdg7tcc-f"/><path class="x5xn_jb-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:fishingpoleandfish"} {...others} />);
}

export default Component;
