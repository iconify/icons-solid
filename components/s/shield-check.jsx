import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h8gin_wvq.css';
import '../../css/v/vx27i8pya.css';
import '../../css/q/qbwmvc_ha.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h8gin_wvq"/><path class="vx27i8pya"/><path class="qbwmvc_ha"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:shield-check"} {...others} />);
}

export default Component;
