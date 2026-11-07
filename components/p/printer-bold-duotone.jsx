import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bpto4nbxf.css';
import '../../css/i/i3sxkkaqb.css';
import '../../css/y/yvgtcy7ig.css';
import '../../css/f/ft4ucmq2j.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/k/kr97k8biz.css';
import '../../css/g/g5q3fvb5q.css';
import '../../css/r/r6y7sebqf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bpto4nbxf"/><path class="i3sxkkaqb"/><path class="yvgtcy7ig"/><path class="ft4ucmq2j"/><g class="xtpeb-edw"><path class="kr97k8biz"/><path class="g5q3fvb5q"/><path class="r6y7sebqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:printer-bold-duotone"} {...others} />);
}

export default Component;
