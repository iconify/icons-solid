import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/udwzgwv5k.css';
import '../../css/w/wdvj95emn.css';
import '../../css/o/ohtj0i3jo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="udwzgwv5k wm-k"/><path class="wdvj95emn"/><path class="ohtj0i3jo wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:server-off"} {...others} />);
}

export default Component;
