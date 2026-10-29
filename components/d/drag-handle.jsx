import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6of_mbqw.css';
import '../../css/j/jsimqabqv.css';
import '../../css/g/gdvanrbvt.css';
import '../../css/q/qbee243ig.css';
import '../../css/b/bkts8k-wx.css';
import '../../css/w/wqgcf9b4p.css';
import '../../css/f/fv-z18bpn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t6of_mbqw wm-shadow"/><path class="jsimqabqv"/><path class="gdvanrbvt"/><path class="qbee243ig"/><path class="bkts8k-wx"/><path class="wm-shine wqgcf9b4p"/><path class="fv-z18bpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:drag-handle"} {...others} />);
}

export default Component;
