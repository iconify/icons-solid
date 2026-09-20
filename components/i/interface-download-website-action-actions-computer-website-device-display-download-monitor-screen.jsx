import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/sfof7_b9k.css';
import '../../css/d/dyaf397_x.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="sfof7_b9k"/><path class="dyaf397_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-download-website-action-actions-computer-website-device-display-download-monitor-screen"} {...others} />);
}

export default Component;
