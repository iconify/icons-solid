import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/aw7h4pbns.css';
import '../../css/q/q4vef2bkz.css';
import '../../css/x/xt16wcg7u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="aw7h4pbns wm-k"/><path class="q4vef2bkz wm-shadow"/><path class="wm-k xt16wcg7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:zap-engrave"} {...others} />);
}

export default Component;
