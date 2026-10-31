import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zno90bbif.css';
import '../../css/q/qquq5k98a.css';
import '../../css/n/ndce7no-a.css';
import '../../css/p/pmq2vbq6s.css';
import '../../css/j/j94wuqxrq.css';
import '../../css/j/jmge_kiks.css';
import '../../css/s/s2c9zkbbv.css';
import '../../css/n/nzjep6bvj.css';
import '../../css/v/v-jmaac3w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k zno90bbif"/><path class="qquq5k98a wm-a"/><path class="ndce7no-a wm-deco"/><path class="pmq2vbq6s wm-k"/><path class="j94wuqxrq wm-k"/><path class="jmge_kiks wm-a"/><path class="s2c9zkbbv wm-shadow"/><path class="nzjep6bvj wm-shine"/><path class="v-jmaac3w wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:medal"} {...others} />);
}

export default Component;
