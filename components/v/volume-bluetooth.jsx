import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gpbbsy__d.css';
import '../../css/a/atjababum.css';
import '../../css/j/jjpn79blb.css';
import '../../css/c/cr7w9mtqb.css';
import '../../css/m/mfi_eacmq.css';
import '../../css/p/pfkto6bvt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gpbbsy__d"/><path class="atjababum"/><path class="jjpn79blb"/><path class="cr7w9mtqb"/><path class="mfi_eacmq"/><path class="pfkto6bvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:volume-bluetooth"} {...others} />);
}

export default Component;
