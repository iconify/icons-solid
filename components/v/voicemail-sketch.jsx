import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mthemujna.css';
import '../../css/o/omzxvh99k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mthemujna wm-k"/><path class="omzxvh99k wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:voicemail-sketch"} {...others} />);
}

export default Component;
