import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gclbuvb1v.css';
import '../../css/x/xu1d0rh0g.css';
import '../../css/f/f_xt7w6im.css';
import '../../css/q/qpo-d2bdk.css';
import '../../css/y/y8-fwxb_s.css';
import '../../css/w/w1ucf4bqs.css';
import '../../css/f/f-rg99b_w.css';
import '../../css/l/l4ur-uadb.css';
import '../../css/u/ucoeaw5_h.css';
import '../../css/o/otz66mboq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gclbuvb1v"/><path class="xu1d0rh0g"/><circle class="f_xt7w6im"/><circle class="qpo-d2bdk"/><circle class="y8-fwxb_s"/><circle class="w1ucf4bqs"/><circle class="f-rg99b_w"/><circle class="l4ur-uadb"/><circle class="ucoeaw5_h"/><circle class="otz66mboq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:arrow-dotted-rotate-anticlockwise"} {...others} />);
}

export default Component;
