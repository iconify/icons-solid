import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/t/tcrosogae.css';
import '../../css/j/jltv4rbyw.css';
import '../../css/s/skbbvrbhv.css';
import '../../css/h/h0rhmfbpn.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="tcrosogae"/><path class="jltv4rbyw wm-shine"/><path class="skbbvrbhv wm-k"/><path class="h0rhmfbpn wm-a"/><path class="rh9qoibkn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:send-horizontal"} {...others} />);
}

export default Component;
