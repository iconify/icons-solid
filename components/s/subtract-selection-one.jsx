import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/xdfr29bzc.css';
import '../../css/c/c12_yhz0x.css';
import '../../css/q/qyd-9_-em.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="xdfr29bzc"/><rect class="c12_yhz0x"/><path class="qyd-9_-em"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:subtract-selection-one"} {...others} />);
}

export default Component;
