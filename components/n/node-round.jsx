import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/awv1y2bci.css';
import '../../css/t/tqb_6nb6c.css';
import '../../css/q/qx_afm4tr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="awv1y2bci"/><circle class="tqb_6nb6c"/><path class="qx_afm4tr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:node-round"} {...others} />);
}

export default Component;
