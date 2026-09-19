import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/ioca-rmze.css';
import '../../css/a/a9pnsbbfh.css';
import '../../css/x/xds6cef4b.css';
import '../../css/s/sd0_e1b4a.css';
import '../../css/m/mcnb5dgfv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ioca-rmze"/><path class="a9pnsbbfh"/><path class="xds6cef4b"/><path class="sd0_e1b4a"/><path class="mcnb5dgfv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:leaf"} {...others} />);
}

export default Component;
