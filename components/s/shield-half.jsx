import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eajemxn0f.css';
import '../../css/r/rgtvoybic.css';
import '../../css/c/ccg_pyhrg.css';
import '../../css/b/bbevfzbvi.css';
import '../../css/x/xfd9nocbf.css';
import '../../css/p/p2mqcsbid.css';
import '../../css/s/s7aqoobfa.css';
import '../../css/q/qiwmikb4e.css';
import '../../css/m/mf6srpb0f.css';
import '../../css/q/qe-d0ab-u.css';
import '../../css/i/ie6ecmbco.css';
import '../../css/z/z8c2f4kye.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eajemxn0f wm-shadow"/><path class="rgtvoybic wm-k"/><path class="ccg_pyhrg wm-k"/><path class="bbevfzbvi wm-k"/><path class="wm-k xfd9nocbf"/><path class="p2mqcsbid wm-shine"/><path class="s7aqoobfa wm-k"/><path class="qiwmikb4e wm-a"/><path class="mf6srpb0f wm-a"/><path class="qe-d0ab-u wm-a"/><path class="ie6ecmbco wm-a"/><path class="wm-a z8c2f4kye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:shield-half"} {...others} />);
}

export default Component;
