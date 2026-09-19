import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/m/mns7xzt_q.css';
import '../../css/a/asurohb5q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="mns7xzt_q"/><path class="asurohb5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:fire-03"} {...others} />);
}

export default Component;
