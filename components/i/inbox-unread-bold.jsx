import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/ja_0od71p.css';
import '../../css/q/qj2_vhona.css';
import '../../css/w/wwd5k9b8o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ja_0od71p"/><path class="qj2_vhona"/><path class="wwd5k9b8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:inbox-unread-bold"} {...others} />);
}

export default Component;
