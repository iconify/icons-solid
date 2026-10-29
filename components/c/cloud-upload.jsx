import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ta8b_yb4r.css';
import '../../css/y/y8az6saon.css';
import '../../css/l/lvac-t4kl.css';
import '../../css/y/ya9hmstiy.css';
import '../../css/t/tgfjz_b7k.css';
import '../../css/x/xvo4q2_nn.css';
import '../../css/e/ebphtu0zb.css';
import '../../css/u/uh8lyarqx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ta8b_yb4r wm-shadow"/><path class="wm-k y8az6saon"/><path class="lvac-t4kl wm-k"/><path class="wm-k ya9hmstiy"/><path class="tgfjz_b7k wm-k"/><path class="wm-shine xvo4q2_nn"/><path class="ebphtu0zb wm-s"/><path class="uh8lyarqx wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:cloud-upload"} {...others} />);
}

export default Component;
