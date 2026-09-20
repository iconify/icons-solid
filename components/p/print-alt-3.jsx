import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/x/xpozrlb4w.css';
import '../../css/z/z5w6g_kni.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="xpozrlb4w"/><path class="z5w6g_kni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:print-alt-3"} {...others} />);
}

export default Component;
