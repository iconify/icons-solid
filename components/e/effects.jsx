import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/ds2r4k_eg.css';
import '../../css/n/nci-l2b9l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ds2r4k_eg"/><path class="nci-l2b9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:effects"} {...others} />);
}

export default Component;
