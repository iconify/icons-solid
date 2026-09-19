import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/q97o_r-5j.css';
import '../../css/g/goq_u1v7h.css';
import '../../css/x/xguidxbuf.css';
import '../../css/k/kegusjbbi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><ellipse class="q97o_r-5j"/><path class="goq_u1v7h"/><path class="xguidxbuf"/><path class="kegusjbbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:data-two"} {...others} />);
}

export default Component;
