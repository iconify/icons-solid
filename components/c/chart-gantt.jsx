import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qbqkblbwy.css';
import '../../css/t/tyg-l7z0h.css';
import '../../css/v/vwho7mbjv.css';
import '../../css/a/aif25abye.css';
import '../../css/q/qhn18mbgr.css';
import '../../css/u/um50_7bbp.css';
import '../../css/j/j3yg92bra.css';
import '../../css/a/ag5y9v-0k.css';
import '../../css/s/stdvq7bpk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qbqkblbwy wm-shadow"/><path class="tyg-l7z0h wm-k"/><path class="vwho7mbjv wm-k"/><path class="aif25abye wm-a"/><path class="qhn18mbgr wm-a"/><path class="um50_7bbp wm-a"/><path class="j3yg92bra wm-a"/><path class="ag5y9v-0k wm-a"/><path class="stdvq7bpk wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:chart-gantt"} {...others} />);
}

export default Component;
