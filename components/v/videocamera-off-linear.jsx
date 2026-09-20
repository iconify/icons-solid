import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jsvkgmukl.css';
import '../../css/x/xyc-er8fc.css';
import '../../css/g/g61gfabvb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jsvkgmukl"/><path class="xyc-er8fc"/><path class="g61gfabvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:videocamera-off-linear"} {...others} />);
}

export default Component;
