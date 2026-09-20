import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jxmnk027l.css';
import '../../css/k/kw_qidm_b.css';
import '../../css/t/t4mumvwbw.css';
import '../../css/t/tka6adb0f.css';
import '../../css/n/nfw6dm0im.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jxmnk027l"/><path class="kw_qidm_b"/><path class="t4mumvwbw"/><path class="tka6adb0f"/><path class="nfw6dm0im"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:incognito-line-duotone"} {...others} />);
}

export default Component;
