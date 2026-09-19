import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qr9h2yblt.css';
import '../../css/i/ipqs2eb9b.css';
import '../../css/g/gm-qzl1jt.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="d2kvgvbvc"><path class="qr9h2yblt"/><path class="ipqs2eb9b"/><path class="gm-qzl1jt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:lv-4x3"} {...others} />);
}

export default Component;
