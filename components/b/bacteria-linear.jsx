import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z-3-7paba.css';
import '../../css/y/y3wbdac5q.css';
import '../../css/q/qvdfr62dc.css';
import '../../css/i/in9q6_f2a.css';
import '../../css/t/ti4rjlbxd.css';
import '../../css/s/s5g8tm5gz.css';
import '../../css/f/f-x4b7csg.css';
import '../../css/y/ytclnmd3h.css';
import '../../css/t/tf2f-x8gf.css';
import '../../css/t/trutp-bil.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="z-3-7paba"/><path class="y3wbdac5q"/><path class="qvdfr62dc"/><path class="in9q6_f2a"/><path class="ti4rjlbxd"/><path class="s5g8tm5gz"/><path class="f-x4b7csg"/><path class="ytclnmd3h"/><path class="tf2f-x8gf"/><path class="trutp-bil"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bacteria-linear"} {...others} />);
}

export default Component;
