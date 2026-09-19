import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/ixyen0btu.css';
import '../../css/v/vluih-bae.css';
import '../../css/x/xjcmv5b-o.css';
import '../../css/n/nyw89sbvb.css';
import '../../css/p/p9fzvk6ve.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ixyen0btu"/><path class="vluih-bae"/><path class="xjcmv5b-o"/><path class="nyw89sbvb"/><path class="p9fzvk6ve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:checklist"} {...others} />);
}

export default Component;
