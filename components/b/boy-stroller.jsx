import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/zst90ruth.css';
import '../../css/a/as4kjjols.css';
import '../../css/w/wukmxv92r.css';
import '../../css/j/j538h6btm.css';
import '../../css/t/tbl1p_8-m.css';
import '../../css/k/k-leub-ac.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="zst90ruth"/><path class="as4kjjols"/><circle class="wukmxv92r"/><circle class="j538h6btm"/><path class="tbl1p_8-m"/><path class="k-leub-ac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:boy-stroller"} {...others} />);
}

export default Component;
