import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/w0wsd5bps.css';
import '../../css/i/ij97w0b8s.css';
import '../../css/q/qgg_1mbmz.css';
import '../../css/l/lwl9xzb4m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="w0wsd5bps"/><path class="ij97w0b8s"/><path class="qgg_1mbmz"/><path class="lwl9xzb4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:lock-keyhole"} {...others} />);
}

export default Component;
