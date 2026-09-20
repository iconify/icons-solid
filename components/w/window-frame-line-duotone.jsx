import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/t/tm6q8mbbb.css';
import '../../css/q/qdnildxhg.css';
import '../../css/p/pgoacybzz.css';
import '../../css/r/ryg9aovix.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><path class="tm6q8mbbb"/><path class="qdnildxhg"/><path class="pgoacybzz"/><path class="ryg9aovix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:window-frame-line-duotone"} {...others} />);
}

export default Component;
