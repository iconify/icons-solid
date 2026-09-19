import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/po_fz627w.css';
import '../../css/p/palkrnn0a.css';
import '../../css/q/qhd6hwb9x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="po_fz627w"/><path class="palkrnn0a"/><path class="qhd6hwb9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:stethoscope"} {...others} />);
}

export default Component;
