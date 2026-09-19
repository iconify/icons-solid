import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/p/pxshsdb4p.css';
import '../../css/b/bvx415bfi.css';
import '../../css/i/iz7bm0b6a.css';
import '../../css/l/l_b-tz7dn.css';
import '../../css/v/v1s64tbtd.css';
import '../../css/t/ty-gohc_o.css';
import '../../css/w/wsg40kbrk.css';
import '../../css/d/dwo127bwd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="pxshsdb4p"/><path class="bvx415bfi"/><path class="iz7bm0b6a"/><path class="l_b-tz7dn"/><path class="v1s64tbtd"/><path class="ty-gohc_o"/><path class="wsg40kbrk"/><path class="dwo127bwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:two-dimensional-code-two"} {...others} />);
}

export default Component;
