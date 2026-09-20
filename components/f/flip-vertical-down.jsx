import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/thn0tpbsf.css';
import '../../css/u/uvdgeevam.css';
import '../../css/x/xw911yb6l.css';
import '../../css/k/k-dftzb8d.css';
import '../../css/f/fz_kinbxt.css';
import '../../css/y/ydl7i080n.css';
import '../../css/l/lqqtb6apx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="thn0tpbsf"/><path class="uvdgeevam"/><path class="xw911yb6l"/><path class="k-dftzb8d"/><path class="fz_kinbxt"/><path class="ydl7i080n"/><path class="lqqtb6apx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:flip-vertical-down"} {...others} />);
}

export default Component;
