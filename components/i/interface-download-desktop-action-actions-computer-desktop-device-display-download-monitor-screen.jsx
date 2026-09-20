import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gkhg4bj7p.css';
import '../../css/j/jjwpyzmku.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="gkhg4bj7p"/><path class="jjwpyzmku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-download-desktop-action-actions-computer-desktop-device-display-download-monitor-screen"} {...others} />);
}

export default Component;
