import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xwmj1bbok.css';
import '../../css/k/kdo3piq0i.css';
import '../../css/s/sxrhy9bto.css';
import '../../css/x/xpw7kygbb.css';
import '../../css/q/qws98mbwj.css';
import '../../css/r/rfyp6zb_e.css';
import '../../css/y/ygh-abbxs.css';
import '../../css/c/c8-b-4bqe.css';
import '../../css/n/nar5ibb2p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow xwmj1bbok"/><path class="kdo3piq0i wm-k"/><path class="sxrhy9bto wm-k"/><path class="wm-k xpw7kygbb"/><path class="qws98mbwj wm-k"/><path class="rfyp6zb_e wm-k"/><path class="wm-shine ygh-abbxs"/><path class="c8-b-4bqe wm-a"/><path class="nar5ibb2p wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:sun"} {...others} />);
}

export default Component;
