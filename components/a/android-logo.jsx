import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/a/ap26nqnxv.css';
import '../../css/l/lsz6fibgl.css';
import '../../css/a/acqdoh0bi.css';
import '../../css/v/vln_qclhe.css';
import '../../css/z/zbkvzbrvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ap26nqnxv"/><path class="lsz6fibgl"/><path class="acqdoh0bi"/><path class="vln_qclhe"/><path class="zbkvzbrvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:android-logo"} {...others} />);
}

export default Component;
