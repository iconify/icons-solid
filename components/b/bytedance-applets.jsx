import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/f/fhwgv_bnm.css';
import '../../css/z/zj66wcbyc.css';
import '../../css/j/j6xc2f2ux.css';
import '../../css/y/yd-opabln.css';
import '../../css/a/aligo6t5v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="fhwgv_bnm"/><path class="zj66wcbyc"/><path class="j6xc2f2ux"/><path class="yd-opabln"/><path class="aligo6t5v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bytedance-applets"} {...others} />);
}

export default Component;
