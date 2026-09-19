import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eye2jmcul.css';
import '../../css/u/uvvdcns2p.css';
import '../../css/y/ypamjenez.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="eye2jmcul"><path class="uvvdcns2p"/><path class="ypamjenez"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:sourcetree-wordmark"} {...others} />);
}

export default Component;
