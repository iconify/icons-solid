import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/ghsefybua.css';
import '../../css/b/bemidachf.css';
import '../../css/g/g2xclxbug.css';
import '../../css/x/xqpnc4m6o.css';
import '../../css/g/go5n_1h8p.css';
import '../../css/v/vq0sn7ovo.css';
import '../../css/r/rrn6mbcit.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ghsefybua wm-deco"/><path class="bemidachf wm-deco"/><path class="g2xclxbug wm-deco"/><path class="wm-k xqpnc4m6o"/><path class="go5n_1h8p wm-a"/><path class="vq0sn7ovo wm-s"/><path class="rrn6mbcit wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:battery-charging-blueprint"} {...others} />);
}

export default Component;
