import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vz9ks891j.css';
import '../../css/q/qqvvtvbuf.css';
import '../../css/c/cmmp7lbmc.css';
import '../../css/c/cnltd1b4n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vz9ks891j"/><path clip-rule="evenodd" class="qqvvtvbuf"/><path clip-rule="evenodd" class="cmmp7lbmc"/><path class="cnltd1b4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-speak-outline"} {...others} />);
}

export default Component;
