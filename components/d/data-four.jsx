import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/q97o_r-5j.css';
import '../../css/e/e-1d_hbzm.css';
import '../../css/x/xguidxbuf.css';
import '../../css/e/epln-tbju.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><ellipse class="q97o_r-5j"/><path class="e-1d_hbzm"/><path class="xguidxbuf"/><path class="epln-tbju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:data-four"} {...others} />);
}

export default Component;
