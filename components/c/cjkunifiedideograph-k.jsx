import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nwqhp5blj.css';
import '../../css/l/ldsnuiifp.css';
import '../../css/f/fcnbtv_es.css';
import '../../css/w/wgncmwr-v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nwqhp5blj"/><path class="ldsnuiifp"/><path class="fcnbtv_es"/><path class="wgncmwr-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:cjkunifiedideograph-k"} {...others} />);
}

export default Component;
