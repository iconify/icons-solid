import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/w/wofxcnbrt.css';
import '../../css/k/khfw2hbyh.css';
import '../../css/w/wjwwm-bhb.css';
import '../../css/n/nl66y9men.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="wofxcnbrt"/><path class="khfw2hbyh"/><path class="wjwwm-bhb wm-k"/><path class="nl66y9men wm-a"/><path class="rh9qoibkn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:voicemail"} {...others} />);
}

export default Component;
