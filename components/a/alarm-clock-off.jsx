import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/b/bqdj1l5_v.css';
import '../../css/f/f8v50vbwa.css';
import '../../css/t/tjmki8x4n.css';
import '../../css/y/y1qb0pbcf.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/n/n2yonroyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="bqdj1l5_v"/><path class="f8v50vbwa wm-shine"/><path class="tjmki8x4n wm-k"/><path class="wm-a y1qb0pbcf"/><path class="qr4ochb5c wm-s"/><path class="n2yonroyj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:alarm-clock-off"} {...others} />);
}

export default Component;
