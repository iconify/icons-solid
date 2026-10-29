import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eihcnbcpg.css';
import '../../css/b/b8dobwb5y.css';
import '../../css/c/cbkdpfu_w.css';
import '../../css/e/egigs8b0s.css';
import '../../css/e/egarwbcbp.css';
import '../../css/a/as0ttpbss.css';
import '../../css/n/nwkz8sbwy.css';
import '../../css/b/bybyudb1p.css';
import '../../css/v/vxf94jbrj.css';
import '../../css/i/i90yzqb-r.css';
import '../../css/w/wu3kcgbyx.css';
import '../../css/d/d831d6bnj.css';
import '../../css/a/apqeascti.css';
import '../../css/w/wryljeb5i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eihcnbcpg wm-shadow"/><path class="b8dobwb5y wm-k"/><path class="cbkdpfu_w wm-k"/><path class="egigs8b0s wm-k"/><path class="egarwbcbp wm-k"/><path class="as0ttpbss wm-shine"/><path class="nwkz8sbwy wm-k"/><path class="bybyudb1p wm-a"/><path class="vxf94jbrj wm-a"/><path class="i90yzqb-r wm-a"/><path class="wm-a wu3kcgbyx"/><path class="d831d6bnj wm-a"/><path class="apqeascti wm-a"/><path class="wm-k wryljeb5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:potted-plant"} {...others} />);
}

export default Component;
