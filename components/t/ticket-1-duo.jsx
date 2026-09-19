import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x73f4fbma.css';
import '../../css/k/k8yewlbuo.css';
import '../../css/k/k6d8plbpn.css';
import '../../css/c/cnlj5wxrz.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="x73f4fbma"/><path class="k8yewlbuo"/><path class="k6d8plbpn"/><path class="cnlj5wxrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:ticket-1-duo"} {...others} />);
}

export default Component;
