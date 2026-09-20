import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cq1fcebhx.css';
import '../../css/d/dk1et5bqm.css';
import '../../css/l/lj4qawbsq.css';
import '../../css/c/culjwubau.css';
import '../../css/y/y3dw_8b3s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cq1fcebhx"/><path class="dk1et5bqm"/><path class="lj4qawbsq"/><path class="culjwubau"/><path class="y3dw_8b3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bichon-dark"} {...others} />);
}

export default Component;
