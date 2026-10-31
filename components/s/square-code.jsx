import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xppejxbig.css';
import '../../css/t/t22ymtuuq.css';
import '../../css/x/xmbpw9mgr.css';
import '../../css/e/e-d3mpbin.css';
import '../../css/n/ne32_jb-c.css';
import '../../css/d/dnlvmccsy.css';
import '../../css/j/jw5kb129z.css';
import '../../css/s/sxwrqywbf.css';
import '../../css/t/td3xg19-x.css';
import '../../css/t/tj3sk2bhs.css';
import '../../css/n/ndpn1gb5y.css';
import '../../css/s/scbz-8b_i.css';
import '../../css/j/jr61tv95r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow xppejxbig"/><path class="t22ymtuuq wm-k"/><path class="wm-k xmbpw9mgr"/><path class="e-d3mpbin wm-k"/><path class="ne32_jb-c wm-k"/><path class="dnlvmccsy wm-k"/><path class="jw5kb129z wm-shine"/><path class="sxwrqywbf wm-a"/><path class="td3xg19-x wm-a"/><path class="tj3sk2bhs wm-a"/><path class="ndpn1gb5y wm-a"/><path class="scbz-8b_i wm-a"/><path class="jr61tv95r wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:square-code"} {...others} />);
}

export default Component;
