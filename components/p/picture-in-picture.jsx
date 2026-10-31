import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wtmdgbf5n.css';
import '../../css/l/lvv6t2uxe.css';
import '../../css/l/lh5cxcb2i.css';
import '../../css/k/kau4d3ldz.css';
import '../../css/q/qcgpe3bqd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow wtmdgbf5n"/><path class="lvv6t2uxe"/><path class="lh5cxcb2i"/><path class="kau4d3ldz"/><path class="qcgpe3bqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:picture-in-picture"} {...others} />);
}

export default Component;
