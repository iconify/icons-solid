import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/s/so69kfbvn.css';
import '../../css/w/ws1ku46ut.css';
import '../../css/q/qj8vd0bbq.css';
import '../../css/z/zuvffgfpv.css';
import '../../css/b/b5ikcpbre.css';
import '../../css/w/wbw_ixbrw.css';
import '../../css/y/yad62e0rw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="so69kfbvn"/><path class="ws1ku46ut"/><path class="qj8vd0bbq"/><path class="zuvffgfpv"/><path class="b5ikcpbre"/><path class="wbw_ixbrw"/><ellipse class="yad62e0rw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:face-scan-square-line-duotone"} {...others} />);
}

export default Component;
