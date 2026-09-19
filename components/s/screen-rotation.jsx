import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/ze1uabcpt.css';
import '../../css/k/ks-fvnbsn.css';
import '../../css/w/wg8r5cc7s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ze1uabcpt"/><path class="ks-fvnbsn"/><path class="wg8r5cc7s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:screen-rotation"} {...others} />);
}

export default Component;
