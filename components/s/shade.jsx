import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/lbebdjpjw.css';
import '../../css/g/gvnlxzqyt.css';
import '../../css/q/qp833-mnc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="lbebdjpjw"/><path class="gvnlxzqyt"/><path class="qp833-mnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:shade"} {...others} />);
}

export default Component;
