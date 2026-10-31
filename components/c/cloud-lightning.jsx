import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/s/smz980ntl.css';
import '../../css/y/yi675tbwa.css';
import '../../css/x/x9w9wwbwa.css';
import '../../css/y/yxa0nhn1t.css';
import '../../css/j/jas2amb1f.css';
import '../../css/v/v0i_pkblb.css';
import '../../css/f/fnxo-kyrq.css';
import '../../css/n/ngwrvibrw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="smz980ntl"/><path class="yi675tbwa"/><path class="wm-shine x9w9wwbwa"/><path class="wm-k yxa0nhn1t"/><path class="jas2amb1f wm-a"/><path class="v0i_pkblb"/><path class="fnxo-kyrq"/><path class="ngwrvibrw wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:cloud-lightning"} {...others} />);
}

export default Component;
