import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t00v0dmce.css';
import '../../css/x/xbdajmbiu.css';
import '../../css/i/id4_8ibao.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="t00v0dmce"/><path clip-rule="evenodd" class="xbdajmbiu"/><path clip-rule="evenodd" class="id4_8ibao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:browser-wifi-flat"} {...others} />);
}

export default Component;
