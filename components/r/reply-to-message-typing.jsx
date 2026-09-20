import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/v/v3nuobjlr.css';
import '../../css/s/s_xrb4h4a.css';
import '../../css/w/wcfmswr9g.css';
import '../../css/h/hag6u4blz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="v3nuobjlr"/><path class="s_xrb4h4a"/><path class="wcfmswr9g"/><path class="hag6u4blz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:reply-to-message-typing"} {...others} />);
}

export default Component;
