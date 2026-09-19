import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/n/nagtiqban.css';
import '../../css/t/to2zchgfu.css';
import '../../css/c/cswwhib7x.css';
import '../../css/x/xjdiaqb1z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="nagtiqban"/><circle class="to2zchgfu"/><circle class="cswwhib7x"/><circle class="xjdiaqb1z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:blockchain"} {...others} />);
}

export default Component;
