import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvojqvb1m.css';
import '../../css/w/wc1dtg7cw.css';
import '../../css/n/nzdmxfbxc.css';
import '../../css/z/z04drlb1l.css';
import '../../css/u/um6-v8miu.css';
import '../../css/q/qr_cp5bhe.css';
import '../../css/j/jcd_jac_u.css';
import '../../css/u/u5h60ybwz.css';
import '../../css/i/iyi0qqihu.css';
import '../../css/t/t7vhsnopi.css';
import '../../css/m/m_ytsqw8u.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wvojqvb1m"/><path class="wc1dtg7cw"/><path class="nzdmxfbxc"/><g class="z04drlb1l"><path class="um6-v8miu"/><path class="qr_cp5bhe"/><path class="jcd_jac_u"/><path class="u5h60ybwz"/><path class="iyi0qqihu"/><circle class="t7vhsnopi"/></g><circle class="m_ytsqw8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:ear-with-hearing-aid-dark-skin-tone"} {...others} />);
}

export default Component;
