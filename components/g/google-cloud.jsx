import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8cy_k2ub.css';
import '../../css/v/vqdeeis2p.css';
import '../../css/q/qwdkftlph.css';
import '../../css/y/ydam-vbhp.css';

const viewBox = {"width":256,"height":256,"top":-25};
const content = `<path class="n8cy_k2ub"/><path class="vqdeeis2p"/><path class="qwdkftlph"/><path class="ydam-vbhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:google-cloud"} {...others} />);
}

export default Component;
