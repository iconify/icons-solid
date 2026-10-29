import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v85x-3b_x.css';
import '../../css/j/jnl-9dcly.css';
import '../../css/r/rgyvxub6w.css';
import '../../css/a/apows5dpr.css';
import '../../css/x/xzmjggb6m.css';
import '../../css/i/i6h333bov.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="v85x-3b_x wm-k"/><path class="jnl-9dcly wm-a"/><path class="rgyvxub6w wm-s"/><path class="apows5dpr wm-k"/><path class="wm-a xzmjggb6m"/><path class="i6h333bov wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:microphone-off-sketch"} {...others} />);
}

export default Component;
