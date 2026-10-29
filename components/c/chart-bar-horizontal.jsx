import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dfsu3xbxr.css';
import '../../css/y/yt1zp5jbs.css';
import '../../css/f/ffw4uub3u.css';
import '../../css/b/br91h8qoa.css';
import '../../css/h/hblcnr55h.css';
import '../../css/z/z_o5fsbvz.css';
import '../../css/i/ilkjv1b0l.css';
import '../../css/v/vqt745bgb.css';
import '../../css/d/d8_qqjbmb.css';
import '../../css/q/qptg37aeg.css';
import '../../css/k/kex6mhbwf.css';
import '../../css/p/p4l50zk0g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dfsu3xbxr wm-a"/><path class="wm-a yt1zp5jbs"/><path class="ffw4uub3u wm-a"/><path class="br91h8qoa wm-k"/><path class="hblcnr55h wm-k"/><path class="wm-k z_o5fsbvz"/><path class="ilkjv1b0l wm-k"/><path class="vqt745bgb wm-k"/><path class="d8_qqjbmb wm-k"/><path class="qptg37aeg wm-k"/><path class="kex6mhbwf wm-k"/><path class="p4l50zk0g wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:chart-bar-horizontal"} {...others} />);
}

export default Component;
