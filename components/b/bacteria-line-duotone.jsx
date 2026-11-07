import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l80i0rb1m.css';
import '../../css/y/y3wbdac5q.css';
import '../../css/l/l48ypk7ok.css';
import '../../css/i/in9q6_f2a.css';
import '../../css/t/ti4rjlbxd.css';
import '../../css/s/s5g8tm5gz.css';
import '../../css/f/f-x4b7csg.css';
import '../../css/u/uzag4r9bs.css';
import '../../css/m/mknks77dm.css';
import '../../css/t/trutp-bil.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="l80i0rb1m"/><path class="y3wbdac5q"/><path class="l48ypk7ok"/><path class="in9q6_f2a"/><path class="ti4rjlbxd"/><path class="s5g8tm5gz"/><path class="f-x4b7csg"/><path class="uzag4r9bs"/><path class="mknks77dm"/><path class="trutp-bil"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bacteria-line-duotone"} {...others} />);
}

export default Component;
