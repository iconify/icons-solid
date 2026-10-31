import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/k/kpvjwabuq.css';
import '../../css/s/sv89y3-pz.css';
import '../../css/x/xqpnc4m6o.css';
import '../../css/g/go5n_1h8p.css';
import '../../css/l/lsvkfwi9l.css';
import '../../css/v/v3bzhxbbh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="kpvjwabuq"/><path class="sv89y3-pz wm-shine"/><path class="wm-k xqpnc4m6o"/><path class="go5n_1h8p wm-a"/><path class="lsvkfwi9l wm-s"/><path class="v3bzhxbbh wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:battery-charging"} {...others} />);
}

export default Component;
