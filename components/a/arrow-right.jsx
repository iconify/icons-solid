import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z1uoq6bvs.css';
import '../../css/z/zlrxo4btm.css';
import '../../css/o/ocu15_byl.css';
import '../../css/o/ot828cbyh.css';
import '../../css/a/a0tk80blm.css';
import '../../css/t/tlazvnbsj.css';
import '../../css/y/y7m-5ednm.css';
import '../../css/f/fahsodqdl.css';
import '../../css/n/nw930sbmq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow z1uoq6bvs"/><path class="wm-shadow zlrxo4btm"/><path class="ocu15_byl"/><path class="ot828cbyh"/><path class="a0tk80blm"/><path class="tlazvnbsj"/><path class="wm-shine y7m-5ednm"/><path class="fahsodqdl wm-shine"/><path class="nw930sbmq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:arrow-right"} {...others} />);
}

export default Component;
