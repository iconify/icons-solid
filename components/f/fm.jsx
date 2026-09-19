import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/v/vs68ofbmw.css';
import '../../css/f/f1blgkbvx.css';
import '../../css/q/qiltuobnx.css';
import '../../css/p/p5eipvbsq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><circle class="vs68ofbmw"/><path class="f1blgkbvx"/><path class="qiltuobnx"/><path class="p5eipvbsq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:fm"} {...others} />);
}

export default Component;
