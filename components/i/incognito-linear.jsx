import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jxmnk027l.css';
import '../../css/k/kw_qidm_b.css';
import '../../css/l/ltg_i71tu.css';
import '../../css/t/tka6adb0f.css';
import '../../css/h/hz6h6ow8e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jxmnk027l"/><path class="kw_qidm_b"/><path class="ltg_i71tu"/><path class="tka6adb0f"/><path class="hz6h6ow8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:incognito-linear"} {...others} />);
}

export default Component;
