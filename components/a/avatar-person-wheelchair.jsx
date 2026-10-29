import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/slqdkeobc.css';
import '../../css/j/ja7fhqb-k.css';
import '../../css/i/ika260a0l.css';
import '../../css/t/tze9pr_0u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="slqdkeobc"/><path class="ja7fhqb-k"/><path class="ika260a0l"/><path class="tze9pr_0u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-person-wheelchair"} {...others} />);
}

export default Component;
