import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/upzq6ibba.css';
import '../../css/y/y-b5o3l-o.css';
import '../../css/y/yxm7-bh2u.css';
import '../../css/a/ai1_vsbfs.css';
import '../../css/a/acu64hb-p.css';
import '../../css/l/l_lcfobsf.css';
import '../../css/g/gv_wc08ob.css';
import '../../css/a/af9dw985z.css';
import '../../css/l/lr_i9zper.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="upzq6ibba"/><path class="y-b5o3l-o"/><path class="yxm7-bh2u"/><path class="ai1_vsbfs"/><path class="acu64hb-p"/><path class="l_lcfobsf"/><path class="gv_wc08ob"/><path class="af9dw985z"/><path class="lr_i9zper"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:immich-kiosk"} {...others} />);
}

export default Component;
