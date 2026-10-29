import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/h0oi9ihsm.css';
import '../../css/w/ww1pcf4xt.css';
import '../../css/h/hlg2s0jjq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="h0oi9ihsm"/><path class="ww1pcf4xt"/><path class="hlg2s0jjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:message-square-sketch"} {...others} />);
}

export default Component;
