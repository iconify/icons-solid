import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/ehr0l2bqh.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/k/kls9jf3gj.css';
import '../../css/w/wwvbehbns.css';
import '../../css/p/pwwumbbzr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ehr0l2bqh wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="kls9jf3gj wm-k"/><path class="wm-a wwvbehbns"/><path class="pwwumbbzr wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mails-blueprint"} {...others} />);
}

export default Component;
