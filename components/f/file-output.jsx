import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpi9pib4w.css';
import '../../css/x/xxwesacfr.css';
import '../../css/c/ctob0dbwa.css';
import '../../css/i/il_fnefrb.css';
import '../../css/q/qjn_nzk6c.css';
import '../../css/l/lggrksomm.css';
import '../../css/i/igx-mtbdi.css';
import '../../css/x/xwpi2ik9e.css';
import '../../css/u/uuqzk_5tc.css';
import '../../css/i/ikanxufrq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qpi9pib4w wm-shadow"/><path class="wm-k xxwesacfr"/><path class="ctob0dbwa wm-k"/><path class="il_fnefrb wm-k"/><path class="qjn_nzk6c wm-k"/><path class="lggrksomm wm-k"/><path class="igx-mtbdi wm-shine"/><path class="wm-a xwpi2ik9e"/><path class="uuqzk_5tc wm-a"/><path class="ikanxufrq wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:file-output"} {...others} />);
}

export default Component;
