import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/v/vhnch4-ad.css';
import '../../css/g/gke6c9b4m.css';
import '../../css/x/x8_a_cx_v.css';
import '../../css/m/mye-p1bbs.css';
import '../../css/u/uooj9_soa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="vhnch4-ad"/><path class="gke6c9b4m wm-shine"/><path class="wm-k x8_a_cx_v"/><path class="mye-p1bbs wm-a"/><path class="uooj9_soa wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:lollipop"} {...others} />);
}

export default Component;
