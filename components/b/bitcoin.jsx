import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mgq_3dz5s.css';
import '../../css/g/gac3uxrkd.css';
import '../../css/m/mvmqk0bcf.css';
import '../../css/m/mbpu8ibdy.css';
import '../../css/n/nad5dccpb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><circle class="mgq_3dz5s"/><path class="gac3uxrkd"/><path class="mvmqk0bcf"/><path class="mbpu8ibdy"/><path class="nad5dccpb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bitcoin"} {...others} />);
}

export default Component;
