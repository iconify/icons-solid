import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/n/npb-n2ptf.css';
import '../../css/z/zn26nlb-t.css';
import '../../css/a/ad-x1bbwf.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/f/f2qcrnc_r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="npb-n2ptf"/><path class="zn26nlb-t"/><path class="ad-x1bbwf wm-shine"/><path class="wm-k yw4fz_b6b"/><path class="f2qcrnc_r wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:compass"} {...others} />);
}

export default Component;
