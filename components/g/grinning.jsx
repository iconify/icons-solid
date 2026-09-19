import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/w/w29_8_wpi.css';
import '../../css/r/rqnixx5da.css';
import '../../css/n/npwto8z6c.css';
import '../../css/e/eiyt9iiys.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="w29_8_wpi"/><path class="rqnixx5da"/><path class="npwto8z6c"/><path class="eiyt9iiys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:grinning"} {...others} />);
}

export default Component;
