import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mal0l8dqu.css';
import '../../css/l/lzsdcc_sv.css';
import '../../css/a/a2xs57mgr.css';
import '../../css/w/wbhoebb4k.css';
import '../../css/d/d_n4-kf0s.css';
import '../../css/k/k9i74kcvf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mal0l8dqu"/><circle class="lzsdcc_sv"/><path class="a2xs57mgr"/><path class="wbhoebb4k"/><circle class="d_n4-kf0s"/><path class="k9i74kcvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:cherries"} {...others} />);
}

export default Component;
