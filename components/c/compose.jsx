import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wgovvk22o.css';
import '../../css/y/yfpy2jban.css';
import '../../css/x/xdv2gr6mr.css';
import '../../css/r/rgnmvxbeq.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/v/vxk2fdbec.css';
import '../../css/y/ypsncrb-r.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="wgovvk22o"><path class="yfpy2jban"/><path class="xdv2gr6mr"/><path class="rgnmvxbeq"/></g><g class="ij2x_72vy"><path class="vxk2fdbec"/><path class="ypsncrb-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:compose"} {...others} />);
}

export default Component;
