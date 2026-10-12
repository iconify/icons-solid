import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wnmbkcbcm.css';
import '../../css/w/wz-xrm3xs.css';
import '../../css/i/irsptrbee.css';
import '../../css/t/tfccw-b9s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wnmbkcbcm"/><path class="wz-xrm3xs"/><path class="irsptrbee"/><path class="tfccw-b9s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:camera-sparkle"} {...others} />);
}

export default Component;
