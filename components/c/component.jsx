import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nfku59krc.css';
import '../../css/x/x9ttfg9rn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="nfku59krc wm-k"/><path class="wm-a x9ttfg9rn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:component"} {...others} />);
}

export default Component;
