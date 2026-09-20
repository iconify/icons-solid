import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/c/c61vhgbib.css';
import '../../css/l/l_ep1oxqq.css';
import '../../css/r/r0padj4iz.css';
import '../../css/c/cqckg2p7n.css';
import '../../css/w/wbw_ixbrw.css';
import '../../css/y/yad62e0rw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="c61vhgbib"/><path class="l_ep1oxqq"/><path class="r0padj4iz"/><path class="cqckg2p7n"/><path class="wbw_ixbrw"/><ellipse class="yad62e0rw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:facemask-circle-broken"} {...others} />);
}

export default Component;
