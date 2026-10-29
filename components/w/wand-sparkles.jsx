import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/ps8zu7-6l.css';
import '../../css/n/ncf12tbyq.css';
import '../../css/n/n-tuk7beb.css';
import '../../css/w/wht-6mbhg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ps8zu7-6l wm-k"/><path class="ncf12tbyq wm-a"/><path class="n-tuk7beb"/><path class="wht-6mbhg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:wand-sparkles"} {...others} />);
}

export default Component;
