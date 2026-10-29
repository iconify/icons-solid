import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/ypp-3zpxo.css';
import '../../css/f/fg2y3xxns.css';
import '../../css/g/go76e-bvo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-k ypp-3zpxo"/><path class="fg2y3xxns wm-a"/><path class="go76e-bvo wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:gulal"} {...others} />);
}

export default Component;
