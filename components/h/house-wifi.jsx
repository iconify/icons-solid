import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2w9cxb1i.css';
import '../../css/o/o2dge3tfz.css';
import '../../css/m/mvdm23uyq.css';
import '../../css/b/bojteg1ve.css';
import '../../css/j/jzx_0xb8s.css';
import '../../css/t/tdxgdlwxj.css';
import '../../css/w/w4aagfbrh.css';
import '../../css/o/o1pykab5n.css';
import '../../css/d/d9qd481ud.css';
import '../../css/p/pi-n5vbgr.css';
import '../../css/p/pyubmfait.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c2w9cxb1i wm-shadow"/><path class="o2dge3tfz wm-k"/><path class="mvdm23uyq wm-k"/><path class="bojteg1ve wm-k"/><path class="jzx_0xb8s wm-k"/><path class="tdxgdlwxj wm-shine"/><path class="w4aagfbrh wm-k"/><path class="o1pykab5n wm-a"/><path class="d9qd481ud wm-a"/><path class="pi-n5vbgr wm-a"/><path class="pyubmfait wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:house-wifi"} {...others} />);
}

export default Component;
