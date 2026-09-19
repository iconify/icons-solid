import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hnvuykb_n.css';
import '../../css/e/e-1d_hbzm.css';
import '../../css/x/xguidxbuf.css';
import '../../css/k/kegusjbbi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><ellipse class="hnvuykb_n"/><path class="e-1d_hbzm"/><path class="xguidxbuf"/><path class="kegusjbbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:data-one"} {...others} />);
}

export default Component;
