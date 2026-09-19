import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wbvx8-9op.css';
import '../../css/w/wdve1s0yd.css';
import '../../css/t/ta7_a93uk.css';
import '../../css/e/eoh5b_aej.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="wbvx8-9op"/><path class="wdve1s0yd"/><path class="ta7_a93uk"/><path class="eoh5b_aej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:mail-download"} {...others} />);
}

export default Component;
