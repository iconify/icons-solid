import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/pa8-l1l1b.css';
import '../../css/x/x0hbydb5g.css';
import '../../css/m/mimbgsbve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="pa8-l1l1b"/><rect class="x0hbydb5g"/><path class="mimbgsbve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:shared-wallet-outline"} {...others} />);
}

export default Component;
