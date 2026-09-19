import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/l/l_ysdhbcq.css';
import '../../css/z/zh3_mmb6e.css';
import '../../css/y/yl8nvnbzd.css';
import '../../css/m/msx3sr11t.css';
import '../../css/d/duiqvnbvk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="l_ysdhbcq"/><path class="zh3_mmb6e"/><path class="yl8nvnbzd"/><path class="msx3sr11t"/><path class="duiqvnbvk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:coupon"} {...others} />);
}

export default Component;
