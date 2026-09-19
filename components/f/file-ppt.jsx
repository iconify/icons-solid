import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/m/mxnvgybaq.css';
import '../../css/e/eey14195s.css';
import '../../css/d/dp7s3bb_g.css';
import '../../css/p/px1vhcixv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="mxnvgybaq"/><rect class="eey14195s"/><path class="dp7s3bb_g"/><path class="px1vhcixv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:file-ppt"} {...others} />);
}

export default Component;
