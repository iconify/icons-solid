import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/i/i_sw54oda.css';
import '../../css/j/jaz23_qts.css';
import '../../css/x/xcf_cbcwz.css';
import '../../css/i/iyjcaz68r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="i_sw54oda"/><path class="jaz23_qts"/><path class="xcf_cbcwz"/><path class="iyjcaz68r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:maps-refresh"} {...others} />);
}

export default Component;
